class RegistrationSociety{

    css_approvalHeader = "h3[id='ui-id-3'] a"
    css_registrationbtn = "a[data-reveal-id='firstModal1']"
    css_iReadbtn = "body > div:nth-child(23) > a:nth-child(5)"
    css_applyForRegistration = ".label" 
    css_applicantName = "#applicant_name"
    css_applicantAddress = "#applicant_address"
    css_applicantState = "#state_id"
    css_applicantDistrict = "#district_id"
    css_applicantCity = "#city_id"
    css_applicantOccupation = "input[name='applicant_occupation']"
    css_applicantSocialEmail = "input[name='applicant_email']"
    css_applicantMobile = "input[name='telephone_number']"
    css_applicantDateOfResolution = "#resolution_formation_society"

    css_memeberName = "#gov_name_member"
    css_memberFatherName = "#gov_fh_name"
    css_memberDob = "#gov_member_date_of_birth"
    css_memberDesignation = "#gov_member_date_of_birth"
    css_membershipNumber = "#gov_membership_number"
    css_memebrshipType = "#gov_membership_type"
    css_memberAddress = "#gov_member_address"
    css_memberState = "#gov_member_state_id"
    css_memberDistrict = "#gov_member_district_id"
    css_memberCity = "#gov_member_city_id"
    css_memberQualification = "#gov_qualification"
    css_memberOccupation = "#gov_occupation"
    css_memebrDateOfEnrollment = "#gov_date_of_enrollment"
    css_memberCast = "#gov_caste"
    css_memberMobile = "#gov_telephone_number"
    css_memberAddMoreBtn = "a[onclick='addMoreMembersGov()']"

    css_memeberName2 = "#name_member"
    css_memberFatherName2 = "#fh_name"
    css_memberDob2 = "#member_date_of_birth"
    // css_memberDesignation = "#gov_member_date_of_birth"
    css_membershipNumber2 = "#membership_number"
    css_memebrshipType2 = "#membership_type"
    css_memberAddress2 = "#member_address"
    css_memberState2 = "#member_state_id"
    css_memberDistrict2 = "#member_district_id"
    css_memberCity2 = "#member_city_id"
    css_memberQualification2 = "#qualification"
    css_memberOccupation2 = "#occupation"
    css_memebrDateOfEnrollment2 = "#date_of_enrollment"
    css_memberCast2 = "#caste"
    css_memberMobile2 = "#telephone_number"
    css_memberAddMoreBtn2 = "a[onclick='addMoreMembers()']"


    clickApproverHeader(){
        cy.get(this.css_approvalHeader).click()
    }

    clickRegistrationTab(){
        cy.get(this.css_registrationbtn).click()
    }

    clickIreadBtn(){
        cy.get(this.css_iReadbtn).click()
    }
    
    clickAapplyForRegistration(){
        cy.get(this.css_applyForRegistration).click()
    }

    typeApplicantName(name){
        cy.get(this.css_applicantName).type(name)
    }
    
    typeApplicanatAddress(address){
        cy.get(this.css_applicantAddress).type(address)
    }

    selectApplicantState(state){
        cy.get(this.css_applicantState).select(state)
    }

    selectApplicantDistrict(district){
        cy.get(this.css_applicantDistrict).select(district)
    }

    selectApplicantCity(city){
        city==='Panchkula' ? cy.get(this.css_applicantCity).select('6960') : cy.get(this.css_applicantCity).select(city)
    }

    typeApplicantOccupation(occupation){
        cy.get(this.css_applicantOccupation).type(occupation)
    }

    typeApplicantEmail(email){
        cy.get(this.css_applicantSocialEmail).type(email)
    }

    typeApplicantMobile(mobile){
        cy.get(this.css_applicantMobile).type(mobile)
    }

    typeApplicantDateOfResolution(dateOfResolution){
        cy.get(this.css_applicantDateOfResolution).type(dateOfResolution)
    }



    typeMemberName(name){
        cy.get(this.css_memeberName).type(name)
    }

    typeMemberFatherName(fatehrName){
        cy.get(this.css_memberFatherName).type(fatehrName)
    }

    typeMemberDob(memberDob){
        cy.get(this.css_memberDob).type(memberDob)
    }

    typeMemberDesignation(designation){
        cy.get(this.css_memberDesignation).type(designation)
    }

    typeMembershipNumber(number){
        cy.get(this.css_membershipNumber).type(number)
    }

    selectMembershipType(type){
        cy.get(this.css_memebrshipType).select(type)
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

    typeMemebrDateOfEnrollment(date){
        cy.get(this.css_memebrDateOfEnrollment).type(date)
    }

    typeMemberCast(cast){
        cy.get(this.css_memberCast).type(cast)
    }

    typeMemberMobile(mobile){
        cy.get(this.css_memberMobile).type(mobile)
    }

    clickMemberAddMoreBtn(){
        cy.get(this.css_memberAddMoreBtn).click()
    }




    typeMemberName2(name){
        cy.get(this.css_memeberName2).type(name)
    }

    typeMemberFatherName2(fatehrName){
        cy.get(this.css_memberFatherName2).type(fatehrName)
    }

    typeMemberDob2(memberDob){
        cy.get(this.css_memberDob2).type(memberDob)
    }

    typeMembershipNumber2(mobile){
        cy.get(this.css_membershipNumber2).type(mobile)
    }

    selectMembershipType2(type){
        cy.get(this.css_memebrshipType2).select(type)
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

    typeMemebrDateOfEnrollment2(date){
        cy.get(this.css_memebrDateOfEnrollment2).type(date)
    }

    typeMemberCast2(cast){
        cy.get(this.css_memberCast2).type(cast)
    }

    typeMemberMobile2(mobile){
        cy.get(this.css_memberMobile2).type(mobile)
    }

    clickMemberAddMoreBtn2(){
        cy.get(this.css_memberAddMoreBtn2).click()
    }

}
export default RegistrationSociety;