import NameApproval from "../pageObjects/NameApproval";

describe('TC_test_02',() => {

    it('Name Approval', () => {
        cy.visit('https://haryanaindustries.gov.in/msme/site/login')
        let na = new NameApproval()
        
        cy.parseXlsx('cypress/fixtures/dataFiles/NameApproval.xlsx').then((excelData) => {

            
            // 1.Enter Username
            na.enterUsername(excelData[1].data[0][1])
            
            //2.Enter Password
            na.enterPassword(excelData[1].data[1][1])
            
            //3. Click on Login button
            na.clickSubmitBtn()

        //4.Click on Society button
            na.clickSocity()

        //5. Click on Register to Approve button
            na.clickRegisterToApproveButton()

        //6. Click on I Have Read button
            na.clickIreadButton()

        //7.Click on I Agree radio button
            na.clickIAgreeRadioButton()

        let applicatantsCount = Cypress.$(excelData[0].data).length
            cy.log("Total number of applicants are: "+applicatantsCount);
            
        //8.Enter Applicant Details
        for(let i=1; i<applicatantsCount; i++){
            
                na.typeApplicantName(excelData[0].data[i][0])
                na.typeDob(excelData[0].data[i][1])
                na.typeAddress(excelData[0].data[i][2])
                na.selectState("Assam") // Changing state explicitly to render values in dropdown
                na.selectState(excelData[0].data[i][3])
                na.selectDistrict(excelData[0].data[i][4])
                cy.log('city: '+excelData[0].data[i][4])
                na.selectCity(excelData[0].data[i][5])
                na.typeOccupation(excelData[0].data[i][6])
                na.typeMobile(excelData[0].data[i][7])

                na.clickOnAddBtn()
                // cy.wait(1000)
                cy.get(na.css_applicantName, { timeout: 10000 }).should('have.value', '')
            }

            //Propose first name
        na.typeProposedFname(excelData[1].data[2][1])
        
        //Propose second name
        na.typeProposedSname(excelData[1].data[3][1])

        //Propose third name
        na.typeProposedTname(excelData[1].data[4][1])

        //Other objective
        na.selectOtherObjective(excelData[1].data[5][1])

        //Enter Office Address
        na.typeOfficeAddress(excelData[1].data[6][1])

        //Select Office State
        na.selectOfficeState(excelData[1].data[7][1])

        //Select office District
        na.selectOfficeDistrict(excelData[1].data[8][1])

        //Select Office City
        na.selectOfficeCity(excelData[1].data[9][1])

        //Type perticular
        na.typePerticuler('NA')

        //Select first applicant
        na.selectFirstApplicant()
            
        });
        
    });

})