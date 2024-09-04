class NewRegistration {
    css_lickHere_Button = 'body > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > div:nth-child(2) > form:nth-child(1) > fieldset:nth-child(2) > div:nth-child(8) > div:nth-child(1) > label:nth-child(1) > a:nth-child(1)'
    css_name = '#applicant_name'
    ccs_address = '#address'
    css_country = '#country'
    css_state = '#state'
    css_district = '#district'
    css_telNo = '#contact_number'
    css_cellprimary = '#communication_primary_phone_number'
    css_email = '#email'
    css_sameaddress = '#communication_address'
    css_addressproofUpload = '#permanent_id_proof'
    css_adharcardNo = '#pan'
    css_adharcardUpload = '#panattachment'
    css_password = '#password'
    css_confirmPassword = '#confirm_password'
    css_registerButton = "input[value='Register']"

    clickHereButton(){
        cy.get(this.css_lickHere_Button)
        .click()
    }

    name(name){
        cy.get(this.css_name).type(name)
    }

    address(address){
        cy.get(this.ccs_address).type(address)
    }

    country(country){
        cy.get(this.css_country).select(country)
    }

    state(state){
        cy.get(this.css_state).select(state)
    }

    district(district){
        cy.get(this.css_district).select(district)
    }

    telNumber(telNumber){
        cy.get(this.css_telNo).type(telNumber)
    }

    cellprimary(cellprimary){
        cy.get(this.css_cellprimary).type(cellprimary)
    }

    email(email){
        cy.get(this.css_email).type(email)
    }

    sameaddress(){
        cy.get(this.css_sameaddress).check()
    }

    addressproofUpload(file){
        cy.get(this.css_addressproofUpload).selectFile({
            fileName: file,
            contents: Cypress.Buffer.from('file contents')
        })
    }

    adharcardNo(adharcardNo){
        cy.get(this.css_adharcardNo).type(adharcardNo)
    }

    adharcarUpload(file){
        cy.get(this.css_adharcardUpload).selectFile({
            fileName: file,
            contents: Cypress.Buffer.from('file contents')
        })
    }

    password(password){
        cy.get(this.css_password).type(password)
    }

    confirmPassword(confirmPassword){
        cy.get(this.css_confirmPassword).type(confirmPassword)
    }

    registerButton(){
        cy.get(this.css_registerButton).click()
    }



}

export default NewRegistration;