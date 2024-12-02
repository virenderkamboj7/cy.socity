class NewMember {
    /// <reference types="cypress" />
    //Authorized person
    css_fillingOfMendatory = "body > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > h3:nth-child(11) > a:nth-child(3)"
    css_fillingOfMendatoryTab1 = "a[data-reveal-id='firstModal5']"
    css_iReadBtn = "body > div:nth-child(23) > a:nth-child(5)"
    css_selectBtn = ".label"
    css_selectButtons = "tbody>tr> td:nth-child(6)>a"
    css_personName = "input[name='applicant_name']"
    css_address = "textarea[name='applicant_address']"
    css_state = "#state_id"
    css_district = "#district_id"
    css_city = "#city_id"
    css_mobile = "input[name='applicant_mobile']"

    //Member detials
    css_memberName = "#gov_name_member"
    css_memberFatherName = "#gov_fh_name"
    css_memberAddress = "#gov_member_address"
    css_memberState = "#gov_member_state_id"
    css_memberDistrict = "#gov_member_district_id"
    css_memberCity = "#gov_member_city_id"
    css_checkbox = "#corresponding_address"
    css_memberDob = "#gov_member_date_of_birth"
    css_memberQualification = "#gov_qualification"
    css_memberOccupation = "#gov_occupation"
    css_memberCast = "#gov_caste"
    css_memberMobile = "#gov_telephone_number"
    css_membershipNumber = "#gov_membership_number"
    css_membershipType = "#gov_membership_type"
    css_memberDateOfEnrollment = "#date_of_enrollment"
    css_memberDesignation = "#gov_designation"
    css_typeOfMembershipFee = "#type_membership_fee"
    css_ddNumber = "#membership_fee_order_number"
    css_dated = "#member_pay_date"
    css_amountingOfFee = "#membership_fee_amount"
    css_addToListBtn = "span[onclick='addMoreNewMembers()']"
    css_file1 = "body > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > div:nth-child(2) > form:nth-child(11) > fieldset:nth-child(9) > div:nth-child(8) > div:nth-child(2) > label:nth-child(1) > div:nth-child(3) > span:nth-child(4) > span:nth-child(1)"
    css_file2="body > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > div:nth-child(2) > form:nth-child(11) > fieldset:nth-child(9) > div:nth-child(9) > div:nth-child(2) > label:nth-child(1) > div:nth-child(3) > span:nth-child(4) > span:nth-child(1)"
    css_removeBtn = "#zz2"

    clickFillingMedatoryBtn(){
        cy.get(this.css_fillingOfMendatory).click()
    } 

    clickFillingMedatorytab1(){
        cy.get(this.css_fillingOfMendatoryTab1).click()
    }

    clickIReadBtn(){
        cy.get(this.css_iReadBtn).click()
    }

    clickSelectBtn(){
        cy.get(this.css_selectButtons).last().click()
    }


    
    typePersonName(name){
        cy.get(this.css_personName).type(name)
    }

    typeAddress(address){
        cy.get(this.css_address).type(address)
    }

    selectState(state){
        ct.get(this.css_state).select(state)
    }

    selectDistrict(district){
        cy.get(this.css_district).select(district)
    }

    selectCity(city){
        city==='Panchkula' ? cy.get(this.css_city).select('6960') : cy.get(this.css_city).select(city)
    }

    typeMobile(mobile){
        cy.get(this.css_mobile).type(mobile)
    }


    //MemberDetails
    typeMemberName(name){
        cy.get(this.css_memberName).type(name)
    }

    typeMemberFatherName(fatherName){
        cy.get(this.css_memberFatherName).type(fatherName)
    }

    typeMemberAddress(address){
        cy.get(this.css_memberAddress).type(address)
    }

    selectState(state){
        cy.get(this.css_memberState).select(state)
    }

    selectDistrict(district){
        cy.get(this.css_memberDistrict).select(district)
    }

    selectCity(city){
        city==='Panchkula' ? cy.get(this.css_memberCity).select('6960') : cy.get(this.css_memberCity).select(city)
    }

    clickCheckBox(){
        cy.get(this.css_checkbox).check()
    }

    typeMemberDob(dob){
        cy.get(this.css_memberDob).type(dob)
    }

    typeMemberQualification(qualification){
        cy.get(this.css_memberQualification).type(qualification)
    }

    typeMemberOccupation(occupation){
        cy.get(this.css_memberOccupation).type(occupation)
    }

    typeMemberCast(cast){
        cy.get(this.css_memberCast).type(cast)
    }

    typeMemberMobile(mobile){
        cy.get(this.css_memberMobile).type(mobile)
    }

    typeMembershipNumber(membershipNumber){
        cy.get(this.css_membershipNumber).type(membershipNumber)
    }

    selectMembershipType(membershipType){
        cy.get(this.css_membershipType).select(membershipType)
    }

    typeDateOfEnrollment(dateOfEnrollment){
        cy.get(this.css_memberDateOfEnrollment).type(dateOfEnrollment)
    }

    typeMemberDesignation(designation){
        cy.get(this.css_memberDesignation).type(designation)
    }
    
    typeMembershipFeeType(feeType){
        cy.get(this.css_typeOfMembershipFee).type(feeType)
    }

    typeDDNumber(ddNumber){
        cy.get(this.css_ddNumber).type(ddNumber)
    }

    typeDated(dated){
        cy.get(this.css_dated).type(dated)
    }

    typeAmoutingOfFee(amountingOfFee){
        cy.get(this.css_amountingOfFee).type(amountingOfFee)
    }

    uploadFile1(file){
        cy.get(this.css_file1).attachFile(file)
    }

    uploadFile2(file){
        cy.get(this.css_file2).attachFile(file)
    }

    clickAddToListBtn(){
        cy.get(this.css_addToListBtn).click()
    }















}

export default NewMember;