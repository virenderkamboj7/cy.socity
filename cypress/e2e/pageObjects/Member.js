class Member{

    css_detailMemberTab = "h3[id='ui-id-29'] a[target='_blank']"
    css_detailMemberLink = "a[data-reveal-id='firstModal11']"
    css_ireadBtn = "body > div:nth-child(23) > a:nth-child(5)"
    css_selectBtn = "tbody tr td a[href='/msme/society/enrollexistingsocietymembers/partone/id/72125']"
    
    css_applicantName = "#applicant_name"
    css_applianceOfficeAddress = "#applicant_address"
    css_applicantState = "#state_id"
    css_appilcantDistrict = "#district_id"
    css_applicantCity = "#city_id"
    css_applicantOccupation = "input[name='applicant_occupation']"
    css_applicantAdhaarNo = "input[name='applicant_aadhar']"
    css_applicantEmail = "input[name='applicant_email']"
    css_applicantMobile = "input[placeholder='Enter 10 digits only eg : 9876543210'][name='telephone_number']"
    
    css_memberName = "#gov_name_member"
    css_memberFatherName = "#gov_fh_name"
    css_memberDob = "#gov_member_date_of_birth"
    css_memberDesignation = "#gov_designation"
    css_membershipNumber = "#gov_membership_number"
    css_membershipType = "#gov_membership_type"
    css_memberAddress = "#gov_member_address"
    css_memberState = "#gov_member_state_id"
    css_memberDistrict = "#gov_member_district_id"
    css_memberCity = "#gov_member_city_id"
    css_memberQualification = "#gov_qualification"
    css_memberOccupation = "#gov_occupation"
    css_memberDateOfEnrollment = "#gov_date_of_enrollment"
    css_memberCast = "#gov_caste"
    css_memberAdhaar = "#gov_aadhar_number"
    css_memberMobile = "#gov_telephone_number"
    css_addToListBtn1 = "a[onclick='addMoreMembersGov()']"

    css_memberName2 = "#name_member"
    css_memberFatherName2 = "#fh_name"
    css_memberDob2 = "#member_date_of_birth"
    css_memberDesignation2 = "#gov_designation"
    css_membershipNumber2 = "#membership_number"
    css_membershipType2 = "#membership_type"
    css_memberAddress2 = "#member_address"
    css_memberState2 = "#society_member_state_id"
    css_memberDistrict2 = "#society_member_district_id"
    css_memberCity2 = "#society_member_city_id"
    css_memberQualification2 = "#qualification"
    css_memberOccupation2 = "#occupation"
    css_memberDateOfEnrollment2 = "#date_of_enrollment"
    css_memberCast2 = "#caste"
    css_memberAdhaar2 = "#aadhar_number"
    css_memberMobile2 = "#telephone_number"
    css_addToListBtn2 = "a[onclick='addMoreMembers()']"

    
    clickDetailMemberTab(){
        cy.get(this.css_detailMemberTab).click()
    }

    clickMemberLink(){
        cy.get(this.css_detailMemberLink).click()
    }

    clickIreadButton(){
        cy.get(this.css_ireadBtn).click()
    }

    clickSelectButton(){
        cy.get(this.css_selectBtn).invoke('removeAttr','target').click()
    }


    //Applicant detials
    typeApplicantName(name){
        cy.get(this.css_applicantName).type(name)
    }

    typeApplicantOfficeAddress(address){
        cy.get(this.css_applianceOfficeAddress).type(address)
    }

    selectApplicantState(state){
        cy.get(this.css_applicantState).select(state)
    }

    seleApplicantDistrict(district){
        cy.get(this.css_appilcantDistrict).select(district)
    }

    selectApplicantCity(city){
        city==='Panchkula' ? cy.get(this.css_applicantCity).select('6960') : cy.get(this.css_applicantCity).select(city)
    }

    typeApplicantOccupation(occupation){
        cy.get(this.css_applicantOccupation).type(occupation)
    }

    typeApplicantAdhaarNo(adhaarNo){
        cy.get(this.css_applicantAdhaarNo).type(adhaarNo)
    }

    typeApplicantEmail(email){
        cy.get(this.css_applicantEmail).type(email)
    }

    typeApplicantMobile(mobile){
        cy.get(this.css_applicantMobile).type(mobile)
    }



    //Member 1 details
    typeMemberName(name){
        cy.get(this.css_memberName).type(name)
    }

    typeMemberFatherName(fatherName){
        cy.get(this.css_memberFatherName).type(fatherName)
    }

    typeMemberDob(dob){
        cy.get(this.css_memberDob).type(dob)
    }

    typeMemberDesignation(designation){
        cy.get(this.css_memberDesignation).type(designation)
    }

    typeMembershipNumber(memnershipNumber){
        cy.get(this.css_membershipNumber).type(memnershipNumber)
    }

    selectMembershipType(membershipType){
        cy.get(this.css_membershipType).select(membershipType)
    }

    typeMemberAddress(address){
        cy.get(this.css_memberAddress).type(address)
    }

    selectMemberState(state){
        cy.get(this.css_memberState).select(state)
    }

    selectMemberDistrict(district){
        cy.get(this.css_memberDistrict).select(district)
    }

    selectMemberCity(city){
        city==='Panchkula' ? cy.get(this.css_memberCity).select('6960') : cy.get(this.css_memberCity).select(city)
    }

    typeMemberQualification(qualification){
        cy.get(this.css_memberQualification).type(qualification)
    }

    typeMemberOccupation(occupation){
        cy.get(this.css_memberOccupation).type(occupation)
    }

    typeMemberDateOfEnrollment(dateOfEnrollment){
        cy.get(this.css_memberDateOfEnrollment).type(dateOfEnrollment)
    }

    typeMemberCast(cast){
        cy.get(this.css_memberCast).type(cast)
    }

    typeMemberAdhaar(adhaarNo){
        cy.get(this.css_memberAdhaar).type(adhaarNo)
    }

    typeMemberMobile(mobile){
        cy.get(this.css_memberMobile).type(mobile)
    }

    clickAddMoreButton1(){
        cy.get(this.css_addToListBtn1).click()
    }


    // Member 2 detiails
    typeMemberName2(name){
        cy.get(this.css_memberName2).type(name)
    }

    typeMemberFatherName2(fatherName){
        cy.get(this.css_memberFatherName2).type(fatherName)
    }

    typMemberDob2(dob){
        cy.get(this.css_memberDob2).type(dob)
    }

    typeMemberDesignation2(designation){
        cy.get(this.css_memberDesignation2).type(designation)
    }

    typeMembershipNumber2(memnershipNumber){
        cy.get(this.css_membershipNumber2).type(memnershipNumber)
    }

    selectMembershipType2(membershipType){
        cy.get(this.css_membershipType2).select(membershipType)
    }

    typeMemberAddress2(address){
        cy.get(this.css_memberAddress2).type(address)
    }

    selectMemberState2(state){
        cy.get(this.css_memberState2).select(state)
    }

    selectMemberDistrict2(district){
        cy.get(this.css_memberDistrict2).select(district)
    }

    selectMemberCity2(city){
        city==='Panchkula' ? cy.get(this.css_memberCity2).select('6960') : cy.get(this.css_memberCity2).select(city)
    }

    typeMemberQualification2(qualification){
        cy.get(this.css_memberQualification2).type(qualification)
    }

    typeMemberOccupation2(occupation){
        cy.get(this.css_memberOccupation2).type(occupation)
    }

    typeMemberDateOfEnrollment2(dateOfEnrollment){
        cy.get(this.css_memberDateOfEnrollment2).type(dateOfEnrollment)
    }

    typeMemberCast2(cast){
        cy.get(this.css_memberCast2).type(cast)
    }

    typeMemberAdhaar2(adhaarNo){
        cy.get(this.css_memberAdhaar2).type(adhaarNo)
    }

    typeMemberMobile2(mobile){
        cy.get(this.css_memberMobile2).type(mobile)
    }

    clickAddMoreButton2(){
        cy.get(this.css_addToListBtn2).click()
    }

    clickMobileTxtHeader(){
        cy.get("body > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > div:nth-child(2) > form:nth-child(10) > fieldset:nth-child(6) > div:nth-child(14) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(7)").click()
    }

    clickMobileTxtHeader2(){
        cy.get("body > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > div:nth-child(2) > form:nth-child(10) > fieldset:nth-child(6) > div:nth-child(14) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(7)").click()
    }

}
export default Member;