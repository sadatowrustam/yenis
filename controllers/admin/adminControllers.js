const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { promisify } = require('util');
const AppError = require('../../utils/appError');
const catchAsync = require('../../utils/catchAsync');
const { Admin, Products } = require('../../models');
const fs = require("fs")
const { Op } = require("sequelize")
const signToken = (id) => {
    return jwt.sign({ id }, 'rustam', {
        expiresIn: '24h',
    });
};
const createSendToken = (admin, statusCode, res) => {
    const token = signToken(admin.id);
    res.status(statusCode).json({
        token,
        data: {
            admin,
        },
    });
};
exports.login = catchAsync(async(req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return next(new AppError('Please provide username and  password', 400));
    }
    console.log(req.body)
    const admin = await Admin.findOne({ where: { username } });

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
        return next(new AppError('Incorrect username or password ine dogry wariant admin admin ', 401));
    }

    createSendToken(admin, 200, res);
});
exports.protect = catchAsync(async(req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new AppError('You are not logged as an Admin!.', 401));
    }
    const decoded = await jwt.verify(token, 'rustam');
    const freshAdmin = await Admin.findOne({ where: { id: decoded.id } });

    if (!freshAdmin) {
        return next(
            new AppError('The user belonging to this token is no longer exists', 401)
        );
    }
    req.admin = freshAdmin;
    next();
});
exports.sendMe = catchAsync(async(req, res, next) => {
    return res.status(200).send(req.admin)
})
exports.updateMe = catchAsync(async(req, res, next) => {
    const { username, password, newPassword, newPasswordConfirm } = req.body;

    if (!username) {
        return next(new AppError('Please provide username and  password', 400));
    }

    const admin = await Admin.findOne();

    if (password && newPassword) {
        if (!(await bcrypt.compare(password, admin.password))) {
            return next(new AppError('Your current password is not correct', 401));
        }

        if (newPassword !== newPasswordConfirm) {
            return next(new AppError('New passwords are not the same', 400));
        }

        admin.update({
            password: await bcrypt.hash(newPassword, 12),
        });
    }

    admin.update({
        username,
    });

    createSendToken(admin, 200, res);
});
exports.changeTime = catchAsync(async(req, res, next) => {
    const { newExpirationDay } = req.body
    console.log(req.body)
    var expiration_days = fs.readFileSync('./config/expire_time.txt', 'utf8')
    let today = new Date().getTime()
    let new_expiration_time_ms = Number(newExpirationDay) * 86400 * 1000
    if (newExpirationDay > Number(expiration_days)) {
        let expiration_time = today - new_expiration_time_ms
        var products = await Products.findAll({
            where: {
                is_new_expire: {
                    [Op.gt]: expiration_time
                },
                isNew: false
            },
        })
        for (const product of products) {
            await product.update({ isNew: true })
            console.log(`Product with id: ${product.product_id} is  new product now`)
        }
    } else {
        let expiration_time = today - new_expiration_time_ms
        var products = await Products.findAll({
            where: {
                is_new_expire: {
                    [Op.lt]: expiration_time
                },
                isNew: true
            },
        })
        for (const product of products) {
            await product.update({
                isNew: false
            })
            console.log(`Product with id: ${product.product_id} is not new product now`)
        }
    }
    fs.writeFileSync("config/expire_time.txt", newExpirationDay.toString())
    return res.status(200).send({ msg: "Sucess" })
})
exports.getTime = catchAsync(async(req, res, next) => {
    var expiration_days = fs.readFileSync('config/expire_time.txt', 'utf8')
    return res.status(200).send({ day: Number(expiration_days) })
})