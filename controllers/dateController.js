const { Statistics } = require("../models")
const schedule = require("node-schedule")

const day = schedule.scheduleJob('0 0 0 * * *', async() => {
    let statistika = await Statistics.findOne()
    await statistika.update({ day: 0 })
    console.log("Gunligi pozdy")
});
const month = schedule.scheduleJob('0 0 0 1 * *', async function() {
    let statistika = await Statistics.findOne()
    await statistika.update({ day: 0, month: 0 })
    console.log("Ayy pozdy")

});
const week = schedule.scheduleJob('0 0 0 * * 1', async function() {
    let statistika = await Statistics.findOne()
    await statistika.update({ day: 0, week: 0 })
    console.log("Hepdani pozdy")

});
module.exports = () => {}