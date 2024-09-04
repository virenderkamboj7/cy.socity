import NewRegistration from "../pageObjects/NewRegistrationsPage";

describe('TC_test_01', () => {

    it('New Registration', () => {
        cy.visit('https://haryanaindustries.gov.in/msme/site/login')
        const nr = new NewRegistration() 
        nr.clickHereButton()

        cy.parseXlsx('cypress/fixtures/dataFiles/NewRegistration.xlsx').then((excelData)=>{           
        nr.name(excelData[0].data[0][1])
        nr.address(excelData[0].data[1][1])
        nr.state(excelData[0].data[2][1])
        nr.district(excelData[0].data[3][1])
        nr.telNumber(excelData[0].data[4][1])
        nr.cellprimary(excelData[0].data[4][1])
        nr.email(excelData[0].data[5][1])
        nr.sameaddress()
        nr.addressproofUpload('cypress\fixtures\fileUploads\AadharCard.pdf')
        nr.adharcardNo(excelData[0].data[6][1])    
        nr.adharcarUpload('cypress\fixtures\fileUploads\AadharCard.pdf') 
        nr.password(excelData[0].data[7][1])
        nr.confirmPassword(excelData[0].data[7][1])
        })
        // nr.registerButton()
        
    });

})