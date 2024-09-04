const { defineConfig } = require("cypress");
const xlsx = require('node-xlsx')
const fs = require('fs')
const path = require('path') 

module.exports = defineConfig({
  projectId: 'qr13kf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      //Excel config
      on('task', {parseXlsx({filePath}){
        return new Promise((resolve, reject) => {
          try{
            const xlData = xlsx.parse(fs.readFileSync(filePath))
            resolve(xlData)
          }catch(e){
            reject(e)
          }
        })
      }}
      )

    },
  },
  watchForFileChanges: false, 
  
});
