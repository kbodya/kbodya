// describe('Filling up all required fields on Steps', () =>  {
//     //Func tests for pages
//     it ('I can fill up all required fields and move to the next page', () => {
//         cy.visit('https://register.kingsinterhigh.co.uk/');
//         fillInPage1(
//             {
//                 FirstName: 'BogdanTest',
//                 LastName: 'Kalina',
//                 EmailAddress: 'testingEDU@testing.com'
//             }
//         )
//         fillInPage2(
//             {
//                 ContactNumber: '044123456789',
//                 AddressLine1: 'Nizhnii Val 411',
//                 AddressLine2: '41',
//                 City: 'Kyiv',
//                 PostalCode: '04071'
//             }
//         )
//         fillInPage3()
//         fillInPage4()  
//         fillInPage5m(
//             {
//                 StudentFirstName: 'TestStudent One',
//                 StudentLastName: 'TestStudent One LM',
//                 StudentDateofBirth: '2006-12-12'
//             }
//     )
//         fillInPagesix()
//         fillInPageseven()
//         fillInPageeighth()
//         fillInPageSecondUser({
//             SecStudentFirstName: 'SecondTestStudent One',
//             SecStudentLastName: 'SecondTestStudent One LM',
//             SecStudentDateofBirth: '2008-10-11'
//         })
//         fillInPageSecUserPage()
//         fillInPageSecUserPageStageTwo()
//         //fillInPageSecUserPageStageThree()
//         fillInPageConfirmationPage()
//         fillInPageEditSecStudent(
//             {
//                 EditSecStudentFirstNameEdit: 'EditTestStudent One Edited',
//                 EditSecStudentLastNameEdit: 'EditTestStudent One Edited LN',
//                 EditSecStudentDateofBirthEdit: '2006-09-10'
//             }
//         )

// function fillInPage1(fieldsToFill) {
//     //Checking if page contains elements


//     //cy.title().should('eq', 'InterHigh Registration')
//     cy.contains('Estimated time remaining:').should('be.visible')
//     cy.contains('Title').should('be.visible')
//     cy.contains('First Name').should('be.visible')
//     cy.contains('Last Name').should('be.visible')
//     cy.contains('Email Address').should('be.visible')

//     //Test
//     cy.get("input[id='firstName']").type(fieldsToFill.FirstName)
//     .should('have.value','BogdanTest')
//     cy.get('input[id="lastName"]').type(fieldsToFill.LastName)
//     .should('have.value','Kalina')
//     cy.get('input[id="email"]').type(fieldsToFill.EmailAddress)
//     .should('have.value','testingEDU@testing.com')
//     cy.get('.styles_input__NV00d')
//     .should('have.css', 'background-color', 'rgb(255, 255, 255)')
//     cy.get('#root > div > main > div > div > form > div.styles_checkboxHolder__mmytN > label:nth-child(1) > button').click()
//     cy.get('button[type="submit"]').should('be.visible')
//     .click()
//     cy.wait(2000) //wait for 3 sec (for correct geolocation)
// }
// function fillInPage2(fieldsToFill){

//   //Page should contain the following elements:
//     cy.contains('Estimated time remaining:').should('be.visible')
//     cy.contains('Tell us more about the primary parent / guardian').should('be.visible')
//     cy.contains('Country of Residence').should('be.visible')
//     cy.contains('Contact Number').should('be.visible')
//     cy.contains('Address Line 1').should('be.visible')
//     cy.contains('Address Line 2').should('be.visible')
//     cy.contains('City').should('be.visible')
//     //Test
//         cy.get('#root > div > main > div > div > form > div.styles_selectWrap__unqpR > div').click()
//         cy.get('#root > div > main > div > div > form > div.styles_selectWrap__unqpR > div.styles_dropdownListWrap__4487h.styles_search__JC29y > ul > li:nth-child(246)').click()
//         cy.get("input[id='telephoneNumber']").type(fieldsToFill.ContactNumber)
//         .should('have.value','044123456789')
//         cy.get("input[id='address.addressLine1']").type(fieldsToFill.AddressLine1)
//         .should('have.value','Nizhnii Val 411')
//         cy.get("input[id='address.addressLine2']").type(fieldsToFill.AddressLine2)
//         .should('have.value','41')
//         cy.get("input[id='address.city']").type(fieldsToFill.City)
//         .should('have.value','Kyiv')
//         cy.get("input[id='address.postalCode']").type(fieldsToFill.PostalCode)
//         .should('have.value','04071') 
//         cy.get('.styles_input__NV00d')
//         .should('have.css', 'background-color', 'rgb(255, 255, 255)')
//         cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
// }
// function fillInPage3(){
//     //Page should contain the following elements:
//     cy.contains('Estimated time remaining:').should('be.visible')
//     cy.contains('Thanks BogdanTest, let’s start with the basics.').should('be.visible')
//     cy.contains('Confirm your timetable').should('be.visible')

//     //Test
//         cy.get('#root > div > main > div > div > form > div.styles_cardHolder__6EnhO.styles_inRow__woVjV > div:nth-child(2) > svg > circle').click()
//         cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
// }

// function fillInPage4(){
//    // Page contains the following elements: 
//      cy.contains('Estimated time remaining:').should('be.visible')
//      cy.contains('How many students would you like to enrol?').should('be.visible')
    
//     //Test
//     cy.get('#root > div > main > div > div > form > div:nth-child(1) > div > div.styles_btnsWrap__M7VwB > button.styles_btn__qYfK-.styles_plus__o5XGV').click()
//     cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
// }
// })
// function fillInPage5m(fieldsToFill){
//     //Page contains the followith elements: 
//     cy.contains('Estimated time remaining:').should('be.visible')
//     cy.contains('Tell us about your first student').should('be.visible')
//     cy.contains('First Name').should('be.visible')
//     cy.contains('Last Name').should('be.visible')
//     cy.contains('Date of Birth').should('be.visible')
//     cy.contains('Desired Start Date').should('be.visible')
//     //Test
//     cy.get("input[id='firstName']").type(fieldsToFill.StudentFirstName)
//     .should('have.value','TestStudent One')
//     cy.get('input[id="lastName"]').type('First Student LastName')
//     .should('have.value','First Student LastName')
//     cy.get('#dateOfBirth').type(fieldsToFill.StudentDateofBirth)
//     .should('have.value','2006-12-12')
//     cy.get('#root > div > main > div > div > form > div:nth-child(4) > div').click()
//     cy.get('#root > div > main > div > div > form > div.styles_selectWrap__unqpR > div.styles_dropdownListWrap__4487h.styles_search__JC29y > ul > li:nth-child(246)').click()
//     cy.get('#root > div > main > div > div > form > div:nth-child(5) > div').click()
//     cy.get('#root > div > main > div > div > form > div:nth-child(5) > div.styles_dropdownListWrap__4487h > ul > li:nth-child(2)').click() 
//     cy.get('.styles_input__NV00d')
//     .should('have.css', 'background-color', 'rgb(255, 255, 255)')
//     cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
// }})
// function fillInPagesix(){
//     // Page contains the following elements and data
//     cy.contains('Estimated time remaining:').should('be.visible')
//     cy.contains('Which year group will TestStudent One be joining?').should('be.visible')
//     cy.contains('Primary').should('be.visible')
//     cy.contains('Lower Secondary').should('be.visible')
//     cy.contains('Upper Secondary').should('be.visible')
//     cy.contains('Sixth Form').should('be.visible')
//     cy.contains('Year 3').should('be.visible')

//     //Test
//     cy.get('.styles_checked__pAqHJ')
//     .should('have.css', 'background-color', 'rgb(237, 244, 232)')
//     //Y11
//     cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
// }
// function fillInPageseven(){
//     // Page contains the following elements and data
//     cy.contains('Estimated time remaining:').should('be.visible')
//     cy.contains('Subject Selector - Stage 1 of 2').should('be.visible')
//     cy.contains('Choose 1 science subject').should('be.visible')
//     cy.contains('Core Subjects').should('be.visible')
//     cy.contains('Science').should('be.visible')
//     cy.contains('Summary').should('be.visible')
//     cy.contains('TestStudent One First Student LastName').should('be.visible')
//     cy.contains('Upper Secondary, Key Stage 4:').should('be.visible')
//     cy.contains('Age 14 to 16').should('be.visible')
//     //Test
//     cy.get('#subjects > div:nth-child(2) > div > div:nth-child(1) > svg > circle').click()
//     cy.get('.styles_checked__pAqHJ')
//     .should('have.css', 'background-color', 'rgb(237, 244, 232)')
//     //Next
//     cy.get('#root > div > main > aside > div > div > div.styles_buttonHolder__vfSLx.styles_subjects__iu0pi > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
// }
// function fillInPageeighth(){
//     // Page contains the following elements and data
//     cy.contains('Estimated time remaining:').should('be.visible')
//     cy.contains('Subject Selector - Stage 2 of 2').should('be.visible')
//     cy.contains('Choose your additional subjects').should('be.visible')
//     cy.contains('IGCSEs').should('be.visible')
//     //Test
//     cy.get('#additional-subjects > div > div > div:nth-child(1) > svg > circle').click()
//     cy.get('#additional-subjects > div > div > div:nth-child(2) > svg > circle').click()
//     cy.get('#additional-subjects > div > div > div:nth-child(3) > svg > circle').click()
//     cy.get('#additional-subjects > div > div > div:nth-child(4) > svg > circle').click()
//     cy.get('#root > div.styles_dialogBg__PiT0a > div > footer > button:nth-child(1)').click()
//         cy.get('.styles_checked__pAqHJ')
//         .should('have.css', 'background-color', 'rgb(237, 244, 232)')
//         //Next
//         cy.get('#root > div > main > aside > div > div > div.styles_buttonHolder__vfSLx.styles_subjects__iu0pi > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
// }

// function fillInPageSecondUser(fieldsToFill){
//          //Page contains the followith elements: 
//     cy.contains('Estimated time remaining:').should('be.visible')
//     cy.contains('Tell us about your second student').should('be.visible')
//     cy.contains('First Name').should('be.visible')
//     cy.contains('Last Name').should('be.visible')
//     cy.contains('Date of Birth').should('be.visible')
//     cy.contains('Desired Start Date').should('be.visible')
//     //Test
//     cy.get("input[id='firstName']").type(fieldsToFill.SecStudentFirstName)
//     .should('have.value','SecondTestStudent One')
//     cy.get('input[id="lastName"]').type(fieldsToFill.SecStudentLastName)
//     .should('have.value','SecondTestStudent One LM')
//     cy.get('#dateOfBirth').type(fieldsToFill.SecStudentDateofBirth)
//     .should('have.value','2008-10-11')
//     cy.get('#root > div > main > div > div > form > div:nth-child(4) > div').click()
//     cy.get('#root > div > main > div > div > form > div.styles_selectWrap__unqpR > div.styles_dropdownListWrap__4487h.styles_search__JC29y > ul > li:nth-child(246) ').click()
//     cy.get('#root > div > main > div > div > form > div:nth-child(5) > div').click()
//     cy.get('#root > div > main > div > div > form > div:nth-child(5) > div.styles_dropdownListWrap__4487h > ul > li:nth-child(2)').click()
//     cy.get('.styles_input__NV00d')
//     .should('have.css', 'background-color', 'rgb(255, 255, 255)')
//     cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
// }
// function fillInPageSecUserPage(){
//     // Page contains the following elements and data
//     cy.contains('Estimated time remaining:').should('be.visible')
//     cy.contains('Which year group will SecondTestStudent One be joining?').should('be.visible')
//     cy.contains('Primary').should('be.visible')
//     cy.contains('Lower Secondary').should('be.visible')
//     cy.contains('Upper Secondary').should('be.visible')
//     cy.contains('Sixth Form').should('be.visible')
//     cy.contains('Year 3').should('be.visible')

//     //Test
//     cy.get('.styles_checked__pAqHJ')
//     .should('have.css', 'background-color', 'rgb(237, 244, 232)')
//     //Y9
//     cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
// }
// function fillInPageSecUserPageStageTwo(){
//     cy.contains('Estimated time remaining:').should('be.visible')
//     cy.contains('Subject Selector - Stage 1 of 1').should('be.visible')
//     cy.contains('Choose your additional subjects').should('be.visible')
//     cy.contains('SecondTestStudent One').should('be.visible')
//     cy.contains('Lower Secondary, Key Stage 3:').should('be.visible')
//     cy.contains('Age 11 to 14').should('be.visible')
//     cy.get('#subjects > div:nth-child(2) > div > div:nth-child(1) > svg > circle').click()
//     cy.get('#subjects > div:nth-child(2) > div > div:nth-child(2) > svg > circle').click()
//     cy.get('#subjects > div:nth-child(2) > div > div:nth-child(3) > svg > circle').click()
//     cy.get('#subjects > div:nth-child(2) > div > div:nth-child(4) > svg > circle').click()
//     cy.get('#subjects > div:nth-child(2) > div > div:nth-child(5) > svg > circle').click()
//     //clicking on popup
//     cy.get('#root > div.styles_dialogBg__PiT0a > div > footer > button:nth-child(1)').click()
//     cy.get('#subjects > div:nth-child(2) > div > div:nth-child(6) > svg > circle').click()
//     cy.get('#subjects > div:nth-child(2) > div > div:nth-child(7) > svg > circle').click()
//     cy.get('#subjects > div:nth-child(2) > div > div:nth-child(8) > svg > circle').click()
//     cy.contains('You have selected more than ten subjects').should('be.visible')
//     cy.contains('Please note that studying more than this may result in live lesson cross overs in timetabling').should('be.visible')
//     cy.get('#root > div.styles_dialogBg__PiT0a.styles_error__mygHg > div > footer > button').click()
//     cy.get('.styles_checked__pAqHJ')
//         .should('have.css', 'background-color', 'rgb(237, 244, 232)')
//     cy.get('#root > div > main > aside > div > div > div.styles_buttonHolder__vfSLx.styles_subjects__iu0pi > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
// }
// function fillInPageConfirmationPage(){
//          // Page contains the following elements and data
//          cy.contains('Estimated time remaining:').should('be.visible')
//          cy.contains('Confirmation').should('be.visible')
//          cy.contains('Parent/Guardian Information').should('be.visible')
//          cy.contains('BogdanTest Kalina').should('be.visible')

//         //Test
//         cy.get('#confirm-form > div:nth-child(3) > section:nth-child(4) > div.styles_titleWrap__ZCd8i > span').click()
// }
// function fillInPageEditSecStudent(fieldsToFill){

//     cy.get("input[id='firstName']").clear()
// {force: true}
//     cy.get("input[id='firstName']").type(fieldsToFill.EditSecStudentFirstNameEdit)
//     .should('have.value','EditTestStudent One Edited')
//     cy.get('input[id="lastName"]').clear()
//     cy.get('input[id="lastName"]').type(fieldsToFill.EditSecStudentLastNameEdit)
//     .should('have.value','EditTestStudent One Edited LN')
//     cy.get('#dateOfBirth').clear()
//     cy.get('#dateOfBirth').type(fieldsToFill.EditSecStudentDateofBirthEdit)
//     .should('have.value','2006-09-10')
//     cy.get('.styles_input__NV00d')
//     .should('have.css', 'background-color', 'rgb(255, 255, 255)')
//     cy.get('#root > div > main > div > div > form > div:nth-child(4) > div').click()
//     cy.get('#root > div > main > div > div > form > div.styles_selectWrap__unqpR > div.styles_dropdownListWrap__4487h.styles_search__JC29y > ul > li:nth-child(246)').click()
//     cy.get('#root > div > main > div > div > form > div:nth-child(5) > div').click()
//     cy.get('#root > div > main > div > div > form > div:nth-child(5) > div.styles_dropdownListWrap__4487h > ul > li:nth-child(2)').click()
//     cy.get('#root > div > main > div > div > form > div.styles_buttonHolder__vfSLx > button.styles_btn__YKgti.styles_contained__Xb2jO').click()
//     // cy.contains('EditTestStudent One Edited EditTestStudent One Edited LN').should('be.visible')
//     cy.get('#confirm-form > div:nth-child(3) > section:nth-child(4) > div.styles_titleWrap__ZCd8i > div > span').click()
//     cy.get('#root > div.styles_dialogBg__PiT0a > div > footer > button:nth-child(2)').click()
//     //Confirm->pay
//     cy.get('#confirm-form > div.styles_footerWrap__VhU4S > div.styles_footerConfirm__dPxR3 > div.styles_footerDesktopBtn__90dyl > label > button')
//     .click()
//     cy.get('#confirm-form > div.styles_footerWrap__VhU4S > div.styles_footerConfirm__dPxR3 > div.styles_footerDesktopBtn__90dyl > button')
//     .click()
// }

describe ('This is test', () => {
    it ('Test', () => {
   cy.visit ('https://register-test.kingsinterhigh.co.uk/registration/0FybBg-3f2jSZWlVx2JjtmYcCDbrfs/confirmation')
   cy.get ('div.styles_footerDesktopBtn__90dyl > label > button > svg').click()
   cy.get ('div.styles_footerDesktopBtn__90dyl > .styles_btn__YKgti').click()
      })
  })