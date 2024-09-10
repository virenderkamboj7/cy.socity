import RegistrationSociety from "../pageObjects/RegistrationSociety";
import NameApproval from "../pageObjects/NameApproval";

describe('TC_test_03',() => {

    it('Residtration Socity', () => {
        cy.visit('https://haryanaindustries.gov.in/msme/site/login')
        let na = new NameApproval()
        let rs = new RegistrationSociety()
        
        cy.parseXlsx('cypress/fixtures/dataFiles/RegistrationSociety.xlsx').then((excelData) => {
            // 1.Enter Username
            na.enterUsername(excelData[0].data[0][1])
            
            //2.Enter Password
            na.enterPassword(excelData[0].data[1][1])
            
            //3. Click on Login button
            na.clickSubmitBtn()

            //4.Click on Society button
            na.clickSocity()

            //5.Click on Society button
            rs.clickApproverHeader()

            //6.Click on registration tab
            rs.clickRegistrationTab()

            //7.Click on I Have Read button
            rs.clickIreadBtn()

            //8.CLick on Apply For Registration
            rs.clickAapplyForRegistration()

            //9.Enter name of applicant
            rs.typeApplicantName(excelData[0].data[2][1])

            //10.Enter address
            rs.typeApplicanatAddress(excelData[0].data[3][1])

            //11.Select State
            rs.selectApplicantState(excelData[0].data[4][1])

            //12.Select district
            rs.selectApplicantDistrict(excelData[0].data[5][1])

            //13.Select City
            rs.selectApplicantCity(excelData[0].data[6][1])

            //14.Enter Occupation
            rs.typeApplicantOccupation(excelData[0].data[7][1])

            //15.Enter Email ID
            rs.typeApplicantEmail(excelData[0].data[8][1])

            //16.Enter Mobile Number
            rs.typeApplicantMobile(excelData[0].data[9][1])

            //17.Enter Date of society
            rs.typeApplicantDateOfResolution(excelData[0].data[10][1])
       
    // 18 Governing Body office Bearer/Executive Members of the society   
    let memberCount = Cypress.$(excelData[1].data).length

    for(let i=1; i<memberCount; i++){

        // 18.1 Enter Memeber Name
        rs.typeMemberName(excelData[1].data[i][0])

        //18.2.Enter Father's / Husband's Name
        rs.typeMemberFatherName(excelData[1].data[i][1])

        //18.3.Enter Date of Birth
        rs.typeMemberDob(excelData[1].data[i][2])

        //18.4.Select Designation
        rs.typeMemberDesignation(excelData[1].data[i][3])

        //18.5.Enter Membership Number
        rs.typeMembershipNumber(excelData[1].data[i][4])

        //18.6.Select Type of Membership
        rs.selectMembershipType(excelData[1].data[i][5])

        //18.7.Enter Member Address
        rs.typeMemberAddress(excelData[1].data[i][6])

        //18.8.Select Member State
        rs.selectMemberState(excelData[1].data[i][7])

        //18.9.Select Member District
        rs.selectMemberDistrict(excelData[1].data[i][8])

        //18.10.Select Member City
        rs.selectMemberCity(excelData[1].data[i][9])

        //18.11.Enter Qualification
        rs.typeMemberQualification(excelData[1].data[i][10])

        //18.12.Enter Occupation
        rs.typeMemberOccupation(excelData[1].data[i][11])

        //18.13.Enter Date of Enrollment
        rs.typeMemebrDateOfEnrollment(excelData[1].data[i][12])

        //18.14.Enter Caste
        rs.typeMemberCast(excelData[1].data[i][13])

        //18.15.Enter Member Mobile Number
        rs.typeMemberMobile(excelData[1].data[i][14])

        //18.16.Click On Add More button
        rs.clickMemberAddMoreBtn()
    }

        //////////////////////
    for(let i=1; i<memberCount; i++){    
        // 19.1 Enter Memeber Name
        rs.typeMemberName2(excelData[1].data[i][0])

        //19.2.Enter Father's / Husband's Name
        rs.typeMemberFatherName2(excelData[1].data[i][1])

        //19.3.Enter Date of Birth
        rs.typeMemberDob2(excelData[1].data[i][2])

        //19.4.Enter Membership Number
        rs.typeMembershipNumber2(excelData[1].data[i][4])

        //19.5.Select Type of Membership
        rs.selectMembershipType2(excelData[1].data[i][5])

        //19.6.Enter Member Address
        rs.typeMemberAddress2(excelData[1].data[i][6])

        //19.7.Select Member State
        rs.selectMemberState2(excelData[1].data[i][7])

        //19.8.Select Member District
        rs.selectMemberDistrict2(excelData[1].data[i][8])

        //19.9.Select Member City
        rs.selectMemberCity2(excelData[1].data[i][9])

        //19.10.Enter Qualification
        rs.typeMemberQualification2(excelData[1].data[i][10])

        //19.11.Enter Occupation
        rs.typeMemberOccupation2(excelData[1].data[i][11])

        //19.12.Enter Date of Enrollment
        rs.typeMemebrDateOfEnrollment2(excelData[1].data[i][12])

        //19.13.Enter Caste
        rs.typeMemberCast2(excelData[1].data[i][13])

        //19.14.Enter Member Mobile Number
        rs.typeMemberMobile2(excelData[1].data[i][14])

        //19.15.Click On Add More button
        rs.clickMemberAddMoreBtn2()
        }

        })

    })
})