import NameApproval from "../pageObjects/NameApproval";
import NewMember from "../pageObjects/NewMember";

describe('TC_test_05',() => {

    it('New Member', () => {
        cy.visit('https://haryanaindustries.gov.in/msme/site/login')

        let na = new NameApproval()
        let nm = new NewMember()

        cy.parseXlsx('cypress/fixtures/dataFiles/NewMember.xlsx').then((excelData) => {
        
            // 1.Enter Username
            na.enterUsername(excelData[0].data[0][1])
            
            //2.Enter Password
            na.enterPassword(excelData[0].data[1][1])
            
            //3. Click on Login button
            na.clickSubmitBtn()

            //4.Click on society
            na.clickSocity()

            //5.Click on "Filing of Mandatory Annual Returns u/s 50 (1)"
            nm.clickFillingMedatoryBtn()

            //6.Click on first tab
            nm.clickFillingMedatorytab1()

            //7.Click on "I Have Read" button
            nm.clickIReadBtn()

            //8.Click on "Select" button
            nm.clickSelectBtn()

            //9. Enter  Name of Authorised Person
            nm.typePersonName(excelData[1].data[1][0])

            //10.Enter Address
            nm.typeAddress(excelData[1].data[1][2])

            //11.Select State
            nm.selectState(excelData[1].data[1][3])

            //12.Select District
            nm.selectDistrict(excelData[1].data[1][4])

            //13.Select Village
            nm.selectCity(excelData[1].data[1][5])

            //14.Enter Mobile Number
            nm.typeMobile(excelData[1].data[1][10])


            let memberCount = Cypress.$(excelData[1].data).length
            for(let i=1;i<memberCount;i++){
                
                //15.Enter Member Name
                nm.typeMemberName(excelData[1].data[i][0])

                //16.Enter Member Father Name
                nm.typeMemberFatherName(excelData[1].data[i][1])

                //17.Enter Member Full Address
                nm.typeMemberAddress(excelData[1].data[i][2])

                //18.Select Member State
                nm.selectState(excelData[1].data[i][3])

                //19.Select District
                nm.selectDistrict(excelData[1].data[i][4])

                //19.Select Village
                nm.selectCity(excelData[1].data[i][5])

                //20.Checkbox
                nm.clickCheckBox()

                //21.Enter Member DOB
                nm.typeMemberDob(excelData[1].data[i][6])

                //22.Enter Qualifiaction
                nm.typeMemberQualification(excelData[1].data[i][7])

                //23.Enter Occupation
                nm.typeMemberOccupation(excelData[1].data[i][8])

                //24.Enter Caste
                nm.typeMemberCast(excelData[1].data[i][9])

                //25.Enter Member Mobile Number
                nm.typeMemberMobile(excelData[1].data[i][10])

                //26.Enter Membership Number
                nm.typeMembershipNumber(excelData[1].data[i][11])

                //27.Select Membership Type
                nm.selectMembershipType(excelData[1].data[i][12])

                //28.Enter Enrollment Date
                nm.typeDateOfEnrollment(excelData[1].data[i][13])

                //29.Select Designation
                nm.typeMemberDesignation(excelData[1].data[i][14])

                // nm.typeMembershipFeeType()

                //30.Enter DD Number
                nm.typeDDNumber(excelData[1].data[i][15])

                //31.Enter Date
                nm.typeDated(excelData[1].data[i][16])

                //32.Enter Amounting
                nm.typeAmoutingOfFee(excelData[1].data[i][17])

                //35.Upload File 1
                nm.uploadFile1("fileUploads/Resolution.pdf")

                //35.Upload File 2
                nm.uploadFile2("fileUploads/Resolution.pdf")

                //34.Click on Add To List button
                // nm.clickAddToListBtn()



            }
            





        
        })
        
    });
});