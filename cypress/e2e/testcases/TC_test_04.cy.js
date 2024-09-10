import Member from "../pageObjects/Member"
import NameApproval from "../pageObjects/NameApproval"

describe('TC_test_04',() => {

    it('Member2020', () => {
        cy.visit('https://haryanaindustries.gov.in/msme/site/login')
        let na = new NameApproval()
        let m = new Member()

        cy.parseXlsx('cypress/fixtures/dataFiles/Members2012.xlsx').then((excelData) => {
            // 1.Enter Username
            na.enterUsername(excelData[0].data[0][1])
            
            //2.Enter Password
            na.enterPassword(excelData[0].data[1][1])
            
            //3. Click on Login button
            na.clickSubmitBtn()

            //4.Click on society
            na.clickSocity()

            //5.Expend Member's button
            m.clickDetailMemberTab()

            //6.Click on first link
            m.clickMemberLink()

            //7.Click on on I Read button
            m.clickIreadButton()

            //8.Click on "Select" button
            m.clickSelectButton()


            cy.wait(1000)
            //9.Enter Applicant Name
            m.typeApplicantName(excelData[0].data[2][1])

            //10.Enter Applicant Address
            m.typeApplicantOfficeAddress(excelData[0].data[3][1])

            //11.Select state
            m.selectApplicantState(excelData[0].data[4][1])

            //12.Select District
            m.seleApplicantDistrict(excelData[0].data[5][1])

            //13.Select City
            m.selectApplicantCity(excelData[0].data[6][1])

            //14.Enter Occupation
            m.typeApplicantOccupation(excelData[0].data[7][1])

            //15.Enter Aadhaar Card Number
            m.typeApplicantAdhaarNo(excelData[0].data[8][1])

            //16.Enter email
            m.typeApplicantEmail(excelData[0].data[9][1])

            //17.Enter Applicant Mobile Number
            m.typeApplicantMobile(excelData[0].data[10][1])


            //18.Enter Member 1 data
            let memberCount = Cypress.$(excelData[1].data).length
            for (let i=1; i<memberCount; i++){

                //18.1.Enter Member Name 1
                m.typeMemberName(excelData[1].data[i][0])

                //18.2.Enter Member Father Name 1
                m.typeMemberFatherName(excelData[1].data[i][1])

                //18.3.Enter Member DOB 1
                m.typeMemberDob(excelData[1].data[1][2])

                //18.4.Select Member Designation 1
                m.typeMemberDesignation(excelData[1].data[i][3])

                //18.5.Enter Membership Number 1
                m.typeMembershipNumber(excelData[1].data[i][4])

                //18.6.Select Membership Type 1
                m.selectMembershipType(excelData[1].data[i][5])

                //18.7.Enter Member full address 1
                m.typeMemberAddress(excelData[1].data[i][6])

                //18.8.Select Member State 1
                m.selectMemberState(excelData[1].data[i][7])

                //18.9.Select Member District 1
                m.selectMemberDistrict(excelData[1].data[i][8])

                //18.10.Select Member Village 1
                m.selectMemberCity(excelData[1].data[i][9])

                
                // m.typeMemberQualification()

                //18.11.Enter Occupation
                m.typeMemberOccupation(excelData[1].data[i][10])

                //18.12.Enter Date of Enrollment 1
                m.typeMemberDateOfEnrollment(excelData[1].data[i][11])

               //18.13.Enter Member Caste 1
                m.typeMemberCast(excelData[1].data[i][12])

                //18.14.Enter Member Aadhaar Card 1
                m.typeMemberAdhaar(excelData[1].data[i][13])

                //18.15.Enter Member Mobile Number 1
                m.typeMemberMobile(excelData[1].data[i][14])

                //18.16 Click outside
                m.clickMobileTxtHeader()

                //18.17 Click on Add More Button 1
                m.clickAddMoreButton1()
            }
        
            //19.Enter Member 2 data
            let memberCount2 = Cypress.$(excelData[1].data).length
            for(let i=1;i<memberCount2;i++) { 
            
                //17.1.Enter Memeber Name 1
                m.typeMemberName2(excelData[1].data[i][0])

                //17.2.Enter Member Father Name 1
                m.typeMemberFatherName2(excelData[1].data[i][1])

                //17.3.Enter Member DOB 1
                m.typMemberDob2(excelData[1].data[i][2])

                // m.typeMemberDesignation2()

                //17.5.Enter Membership Number 1
                m.typeMembershipNumber2(excelData[1].data[i][4])

                //17.6.Select Membership Type 1
                m.selectMembershipType2(excelData[1].data[i][5])

                //17.7.Enter Member full address 1
                m.typeMemberAddress2(excelData[1].data[i][6])

                //17.8.Select Member State 1
                m.selectMemberState2(excelData[1].data[i][7])

                //17.9.Select Member District 1
                m.selectMemberDistrict2(excelData[1].data[i][8])

                //17.10.Select Memebr Village 1
                m.selectMemberCity2(excelData[1].data[i][9])

                
                // m.typeMemberQualification2()

                //17.11.Enter Occupation
                m.typeMemberOccupation2(excelData[1].data[i][10])

                //17.12.Enter Date of Enrollment 1
                m.typeMemberDateOfEnrollment2(excelData[1].data[i][11])

                //17.13.Enter Member Caste 1
                m.typeMemberCast2(excelData[1].data[i][12])

                // m.typeMemberAdhaar2()

                //17.15.Enter Member Mobile Number 1
                m.typeMemberMobile2(excelData[1].data[i][14])

                //17.15.Enter Member Mobile Number 1
                m.clickMobileTxtHeader2();

                //17.16.Click on Add to list button
                m.clickAddMoreButton2()
            
            }
        })

    })
})