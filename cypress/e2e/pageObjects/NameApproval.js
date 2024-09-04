class NameApproval{

    css_username = "input[name='LoginForm[email]']"
    css_password = "input[name='LoginForm[password]']"
    css_submit = "input[value='Login']"
    css_socity = "a[title='Click here to proceed for Registration of Societies']"
    css_registerToApproveButton = "a[data-reveal-id='firstModal']"
    css_ireadButton = "body > div:nth-child(23) > a:nth-child(5)"
    css_iAgreeRadioButton = "#pokemonRed"
    css_societyCategory = "#society_category1"
    css_applicantName = "input[name='form1[applicant_name]']"
    css_dob = "#form1_applicant_dob"
    css_address = "textarea[name='form1[applicant_address]']"
    css_state = '#applicant_state'
    css_district = '#applicant_dist'
    css_city = '#applicant_city'
    css_occupation = "input[name='form1[applicant_occupation]']"
    css_mobile = "input[name='form1[applicant_telephone]']"
    css_addButton = "a[onclick='return adduser()']"
    css_proposedFname = "#first_name"
    css_proposedSname = "#second_name"
    css_proposedTname = "#third_name"
    css_mainObjective = "select[name='form1[main_object_society]']"
    css_otherObjective = "textarea[name='form1[other_object_society]']"
    css_officeAddress = "input[name='form1[proposed_offc_address]']"
    css_officeState = "#proposed_offc_state"
    css_officeDistrict = "#proposed_offc_dist"
    css_officeCity = "#proposed_offc_city"
    css_perticulars = "textarea[name='form1[particulars_and_results]']"
    css_selectFirstApplicant = "tbody tr:nth-child(3) td:nth-child(6) a:nth-child(1)"


    enterUsername(username){
        cy.get(this.css_username).type(username)
    }

    enterPassword(password){
        cy.get(this.css_password).type(password, { log: false })
    }

    clickSubmitBtn(){
        cy.get(this.css_submit).click()
    }

    clickSocity(){
        cy.get(this.css_socity).click()
    }

    clickRegisterToApproveButton(){
        cy.get(this.css_registerToApproveButton).click()
    }
    clickIreadButton(){
        cy.get(this.css_ireadButton).click()
    }

    clickIAgreeRadioButton(css_iAgreeRadioButton){
        cy.get(this.css_iAgreeRadioButton).check()
    }

    selectSocityCategory(category){
        cy.get(this.css_societyCategory).select(category)
    }

    typeApplicantName(name){
        // cy.get(this.css_applicantName).type('{selectall}{backspace}')
        cy.get(this.css_applicantName).type(name)
    }

    typeDob(dob){
        cy.get(this.css_dob).type(dob)
    }

    typeAddress(address){
        cy.get(this.css_address).type(address)
    }

    selectState(state){
        cy.get(this.css_state).select(state)
    }

    selectDistrict(district){
        cy.get(this.css_district).select(district)
        
    }

    selectCity(city){
       city==='Panchkula' ? cy.get(this.css_city).select('6960') : cy.get(this.css_city).select(city);
    }

    typeOccupation(occupation){
        cy.get(this.css_occupation).type(occupation)
    }

    typeMobile(mobile){
        cy.get(this.css_mobile).type(mobile)
    }

    clickOnAddBtn(){
        cy.get(this.css_addButton).click()
    }

    typeProposedFname(name){
        cy.get(this.css_proposedFname).type(name)
    }

    typeProposedSname(name){
        cy.get(this.css_proposedSname).type(name)
    }

    typeProposedTname(name){
        cy.get(this.css_proposedTname).type(name)
    }

    selectMainObjective(objective){
        cy.get(this.css_mainObjective).select(objective)
    }

    selectOtherObjective(objective){
        cy.get(this.css_otherObjective).type(objective)
    }

    typeOfficeAddress(address){
        cy.get(this.css_officeAddress).type(address)
    }

    selectOfficeState(state){
        cy.get(this.css_officeState).select(state)
    }

    selectOfficeDistrict(district){
        cy.get(this.css_officeDistrict).select(district)
    }

    selectOfficeCity(city){
        city==='Panchkula' ? cy.get(this.css_officeCity).select('6960') : cy.get(this.css_officeCity).select(city);
    }

    typePerticuler(perticuler){
        cy.get(this.css_perticulars).type(perticuler)
    }

    selectFirstApplicant(){
        cy.get(this.css_selectFirstApplicant).click()
    }
}

export default NameApproval;