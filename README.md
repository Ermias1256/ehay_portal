## Content

**[1. Authentication and Authorization](#Authentication-and-Authorization)**

- _[1.1. Login and Logout](#login-and-logout)_
- _[1.2. Signup](#signup)_
- _[1.3. Role Based Auth](#role-based-auth)_
- _[1.4. User Logs](#user-logs)_
- _[1.5. User Profile](#user-profile)_

**[2.eCommerce](#ecommerce)**

- _[2.1. Products](#products)_
- _[2.2. Orders](#orders)_
- _[2.3. Expenses](#expenses)_
- _[2.4. Employees](#Employees)_
- _[2.5. Customers](#customers)_

**[3.Info](#info)**

- _[3.1. Travel Advisor](#travel-adviser)_
- _[3.2. Cryprto](#crypto)_
- _[3.3. Real Estate](#Real-Estate)_

**[4.Tools](#tools)**

- _[4.1. Tasks](#Tasks)_
- _[4.2. Calendar](#calendar)_
- _[4.3. Google Search](#google-search)_
- _[4.4. Blogs](#blogs)_

**[5.Notifications](#notifications)**

- _[5.1. Notifications](#notifications)_
- _[5.2. Messages](#messages)_
- _[5.3. Emails](#emails)_
- _[5.4. Comments](#comments)_

---

# Authentication and Authorization

## Login and Logout

- [x] Normal login

  - [ ] Validation

    - Invalid username and password
    - Error messages
    - Lock account

  - [x] Navbar toggle - login | user name
  - [x] Logout

    - Clearing of cookies and localStorage profile
    - Return to home page,
    - Navbar caption shows login link

- [x] Google login

  - Google Icon
  - Regirect to gmail
  - Navbar caption change
  - logout - clearing cookies and localStorage and return to home page

- [ ] Login expiry

## Signup

- [x] Signup form display
- [x] Toggle between signup and login
- [x] New user registration
- [ ] Validation of users registration

  - email unique
  - pasword and repeat password
  - all fields are required

- [x] Security verification via email

  - Display verification input field
  - Sending email with verification code
  - Verifying user account
  - Verification code expiry date

## Role Based Auth

- [ ] Define roles

  - General User - 1000

  - Merchant - 1001

  - Admin - 2000

- [x] Grant all users General User - 1000 role

- [ ] Client side authorization

  - check for access right

  - Proceed to the page if access allowed

  - Proceed to login page if user is not authenticated

- [ ] server side authorization

  - middleware - check if user is authenticated

  - controller - fetch records pertaining to authenticated user only

  - json - unauthorized - if user is not authorized to access the end point

## User Logs

## User Profile

# eCommerce

## Products

## Orders

## Expenses

## Employees

## Customers

# Info

## Travel Advisor

## Cryprto

## Real Estate

# Tools

## Tasks

## Calendar

## Google Search

## Blogs

# Notifications

## Notifications

## Messages

## Emails

## Comments
