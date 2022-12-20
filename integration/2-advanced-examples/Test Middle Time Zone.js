describe('Filling up all required fields on Steps', () => {
    //Func tests for pages
    it ('I can fill up all required fields and move to the next page', () => {
        cy.visit('https://register-uat.kingsinterhigh.co.uk');
        fillInPage1(
            {
                FirstName: 'BogdanTest',
                LastName: 'Kalina',
                EmailAddress: 'testingEDU@testing.com'
            }
        )
        fillInPage2(
            {
                ContactNumber: '044123456789',
                AddressLine1: 'Nizhnii Val 411',
                AddressLine2: '41',
                City: 'Kyiv',
                PostalCode: '04071'
            }
        )
        fillInPage3()
        fillInPage4()
        fillInPage5m(
            {
                StudentFirstName: 'TestStudent One',
                StudentLastName: 'TestStudent One LM',
                StudentDateofBirth: '2006-12-12'
            }
        )
        fillInPagesix()
        fillInPageseven()
        fillInPageeighth()
        fillInPageConfirm(
            {
                FirstNameToEdit: 'BogdanQA',
                LastNameToEdit: 'Kalinichenko',
                EmailAddressToEdit: 'testingEDU@testing.com',
                ContactNumberToEdit: '0441111111',
                AddressLine1ToEdit: 'Central Street 497',
                AddressLine2ToEdit: '497-1',
                CityToEdit: 'Kyiv',
                PostalCodeToEdit: '123123Qa'
            }
        )
        fillInPageConfirmEditStudent(
            {
                StudentFirstNameEdit: 'TestStudent One Edited',
                StudentLastNameEdit: 'TestStudent One Edited LN',
                StudentDateofBirthEdit: '2006-12-12'
            }
        )
        });       
    });


function fillInPage1(fieldsToFill) {
    //Checking if page contains elements


    //cy.title().should('eq', 'InterHigh Registration')
    cy.contains('Estimated time remaining:').should('be.visible')
    cy.contains('Title').should('be.visible')
    cy.contains('First Name').should('be.visible')
    cy.contains('Last Name').should('be.visible')
    cy.contains('Email Address').should('be.visible')

    //Test
    cy.get("input[id='firstName']").type(fieldsToFill.FirstName)
    .should('have.value','BogdanTest')
    cy.get('input[id="lastName"]').type(fieldsToFill.LastName)
    .should('have.value','Kalina')
    cy.get('input[id="email"]').type(fieldsToFill.EmailAddress)
    .should('have.value','testingEDU@testing.com')
    cy.get('.styles_input__NV00d')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('#root > div > main > div > div > form > div.styles_checkboxHolder__mmytN > label:nth-child(1) > button').click()
    cy.get('button[type="submit"]').should('be.visible')
    .click()
    cy.wait(2000) //wait for 3 sec (for correct geolocation)
}
function fillInPage2(fieldsToFill){

  //Page should contain the following elements:
    cy.contains('Estimated time remaining:').should('be.visible')
    cy.contains('Tell us more about the primary parent / guardian').should('be.visible')
    cy.contains('Country of Residence').should('be.visible')
    cy.contains('Contact Number').should('be.visible')
    cy.contains('Address Line 1').should('be.visible')
    cy.contains('Address Line 2').should('be.visible')
    cy.contains('City').should('be.visible')
    //Test
    cy.get('#root > div > main > div > div > form > div.styles_selectWrap__unqpR > div').click()
    cy.get('#root > div > main > div > div > form > div.styles_selectWrap__unqpR > div.styles_dropdownListWrap__4487h.styles_search__JC29y > ul > li:nth-child(246)').click()
        cy.get("input[id='telephoneNumber']").type(fieldsToFill.ContactNumber)
        .should('have.value','044123456789')
        cy.get("input[id='address.addressLine1']").type(fieldsToFill.AddressLine1)
        .should('have.value','Nizhnii Val 411')
        cy.get("input[id='address.addressLine2']").type(fieldsToFill.AddressLine2)
        .should('have.value','41')
        cy.get("input[id='address.city']").type(fieldsToFill.City)
        .should('have.value','Kyiv')
        cy.get("input[id='address.postalCode']").type(fieldsToFill.PostalCode)
        .should('have.value','04071') 
        cy.get('.styles_input__NV00d')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
}
function fillInPage3(){
    //Page should contain the following elements:
    cy.contains('Estimated time remaining:').should('be.visible')
    cy.contains('Thanks BogdanTest, let’s start with the basics.').should('be.visible')
    cy.contains('Confirm your timetable').should('be.visible')

    //Test
        cy.get('#root > div > main > div > div > form > div.styles_cardHolder__6EnhO.styles_inRow__woVjV > div:nth-child(2) > svg > circle').click()
        cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
}

function fillInPage4(){
   // Page contains the following elements: 
     cy.contains('Estimated time remaining:').should('be.visible')
     cy.contains('How many students would you like to enrol?').should('be.visible')
    
    //Test
    cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
}
function fillInPage5m(fieldsToFill){
    //Page contains the followith elements: 
    cy.contains('Estimated time remaining:').should('be.visible')
    cy.contains('Tell us about your first student').should('be.visible')
    cy.contains('First Name').should('be.visible')
    cy.contains('Last Name').should('be.visible')
    cy.contains('Date of Birth').should('be.visible')
    cy.contains('Desired Start Date').should('be.visible')
    //Test
    cy.get("input[id='firstName']").type(fieldsToFill.StudentFirstName)
    .should('have.value','TestStudent One')
    cy.get('input[id="lastName"]').type('First Student LastName')
    .should('have.value','First Student LastName')
    cy.get('#dateOfBirth').type(fieldsToFill.StudentDateofBirth)
    .should('have.value','2006-12-12')
    cy.get('#root > div > main > div > div > form > div:nth-child(4) > div').click()
    cy.get('#root > div > main > div > div > form > div.styles_selectWrap__unqpR > div.styles_dropdownListWrap__4487h.styles_search__JC29y > ul > li:nth-child(246)').click()
    cy.get('#root > div > main > div > div > form > div:nth-child(5) > div').click()
    cy.get('#root > div > main > div > div > form > div:nth-child(5) > div.styles_dropdownListWrap__4487h > ul > li:nth-child(2)').click()
    cy.get('.styles_input__NV00d')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
}

function fillInPagesix(){
    // Page contains the following elements and data
    cy.contains('Estimated time remaining:').should('be.visible')
    cy.contains('Which year group will TestStudent One be joining?').should('be.visible')
    cy.contains('Primary').should('be.visible')
    cy.contains('Lower Secondary').should('be.visible')
    cy.contains('Upper Secondary').should('be.visible')
    cy.contains('Sixth Form').should('be.visible')
    cy.contains('Year 3').should('be.visible')

    //Test
    cy.get('.styles_checked__pAqHJ')
    .should('have.css', 'background-color', 'rgb(237, 244, 232)')
    //Y11
    cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
}
function fillInPageseven(){
    // Page contains the following elements and data
    cy.contains('Estimated time remaining:').should('be.visible')
    cy.contains('Subject Selector - Stage 1 of 2').should('be.visible')
    cy.contains('Choose 1 science subject').should('be.visible')
    cy.contains('Core Subjects').should('be.visible')
    cy.contains('Science').should('be.visible')
    cy.contains('Summary').should('be.visible')
    cy.contains('TestStudent One First Student LastName').should('be.visible')
    cy.contains('Upper Secondary, Key Stage 4:').should('be.visible')
    cy.contains('Age 14 to 16').should('be.visible')
    //Test
    cy.get('#subjects > div:nth-child(2) > div > div:nth-child(1) > svg > circle').click()
    cy.get('.styles_checked__pAqHJ')
    .should('have.css', 'background-color', 'rgb(237, 244, 232)')
    //Next
    cy.get('#root > div > main > aside > div > div > div.styles_buttonHolder__vfSLx.styles_subjects__iu0pi > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
}
function fillInPageeighth(){
    // Page contains the following elements and data
    cy.contains('Estimated time remaining:').should('be.visible')
    cy.contains('Subject Selector - Stage 2 of 2').should('be.visible')
    cy.contains('Choose your additional subjects').should('be.visible')
    cy.contains('IGCSEs').should('be.visible')
    //Test
        cy.get('#additional-subjects > div > div > div:nth-child(1) > svg > circle').click()
        cy.get('#additional-subjects > div > div > div:nth-child(2) > svg > circle').click()
        cy.get('#additional-subjects > div > div > div:nth-child(3) > svg > circle').click()
        cy.get('#additional-subjects > div > div > div:nth-child(4) > svg > circle').click()
        cy.get('#root > div.styles_dialogBg__PiT0a > div > footer > button:nth-child(1)').click()
        cy.get('.styles_checked__pAqHJ')
        .should('have.css', 'background-color', 'rgb(237, 244, 232)')
        //Next
        cy.get('#root > div > main > aside > div > div > div.styles_buttonHolder__vfSLx.styles_subjects__iu0pi > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
}
function fillInPageConfirm(fieldsToFill){
     // Page contains the following elements and data
    cy.contains('Estimated time remaining:').should('be.visible')
    cy.contains('Confirmation').should('be.visible')
    cy.contains('Parent/Guardian Information').should('be.visible')
    cy.contains('BogdanTest Kalina').should('be.visible')
    //Test
        cy.get('#confirm-form > section > div.styles_titleWrap__ZCd8i > span').click()

    cy.get("input[id='firstName']").clear()
{force: true}
    cy.get("input[id='firstName']").type(fieldsToFill.FirstNameToEdit)
    .should('have.value','BogdanQA')
    cy.get('input[id="lastName"]').clear()
    cy.get('input[id="lastName"]').type(fieldsToFill.LastNameToEdit)
    .should('have.value','Kalinichenko')
    cy.get('input[id="email"]').clear()
    cy.get('input[id="email"]').type(fieldsToFill.EmailAddressToEdit)
    .should('have.value','testingEDU@testing.com')
    cy.get('.styles_input__NV00d')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('button[type="submit"]').should('be.visible')
    .click()
    //Editing Step2
    cy.get("input[id='telephoneNumber']").clear()
    cy.get("input[id='telephoneNumber']").type(fieldsToFill.ContactNumberToEdit)
    .should('have.value','0441111111')
    cy.get("input[id='address.addressLine1']").clear()
    cy.get("input[id='address.addressLine1']").type(fieldsToFill.AddressLine1ToEdit)
    .should('have.value','Central Street 497')
    cy.get("input[id='address.addressLine2']").clear()
    cy.get("input[id='address.addressLine2']").type(fieldsToFill.AddressLine2ToEdit)
    .should('have.value','497-1')
    cy.get("input[id='address.city']").clear()
    cy.get("input[id='address.city']").type(fieldsToFill.CityToEdit)
    .should('have.value','Kyiv')
    cy.get("input[id='address.postalCode']").clear()
    cy.get("input[id='address.postalCode']").type(fieldsToFill.PostalCodeToEdit)
    .should('have.value','123123Qa') 
    cy.get('.styles_input__NV00d')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('button[type="submit"]').should('be.visible')
    .click()
    cy.contains('BogdanQA Kalinichenko').should('be.visible')
    cy.contains('Central Street 497').should('be.visible')
    cy.contains('testingEDU@testing.com').should('be.visible')
    cy.contains('Kyiv 123123Qa').should('be.visible')
    cy.contains('0441111111').should('be.visible')
}
function fillInPageConfirmEditStudent(fieldsToFill){
    cy.get('#confirm-form > div:nth-child(3) > section > div.styles_titleWrap__ZCd8i > span').click()
    cy.get("input[id='firstName']").clear()
    cy.get("input[id='firstName']").type(fieldsToFill.StudentFirstNameEdit)
    .should('have.value','TestStudent One Edited')
    cy.get('input[id="lastName"]').clear()
    cy.get('input[id="lastName"]').type(fieldsToFill.StudentLastNameEdit)
    .should('have.value','TestStudent One Edited LN')
    cy.get('#dateOfBirth').clear()
    cy.get('#dateOfBirth').type(fieldsToFill.StudentDateofBirthEdit)
    .should('have.value','2006-12-12')
    cy.get('.styles_input__NV00d')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('#root > div > main > div > div > form > div:nth-child(5) > div').click()
    cy.get('#root > div > main > div > div > form > div:nth-child(5) > div.styles_dropdownListWrap__4487h > ul > li:nth-child(2)').click() 
    cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
    cy.contains('TestStudent One Edited TestStudent One Edited LN').should('be.visible')
    //Confirmation -> pay
    cy.get('#confirm-form > div.styles_footerWrap__VhU4S > div.styles_footerConfirm__dPxR3 > div.styles_footerDesktopBtn__90dyl > label > button').click()
    cy.get('#confirm-form > div.styles_footerWrap__VhU4S > div.styles_footerConfirm__dPxR3 > div.styles_footerDesktopBtn__90dyl > button').click()
}
