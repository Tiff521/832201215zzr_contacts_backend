# 832201215zzr_contacts_backend

# Contact Management System - Backend

This is the backend of the Contact Management System, built using **Express.js** and **MySQL**. It provides a RESTful API for managing contacts, including creating, reading, updating, deleting, exporting, and paginating contacts. The backend is designed to communicate with the frontend, allowing users to manage contact information seamlessly.

## Features

- **Create Contact**: Adds a new contact to the database.
- **Retrieve Contacts**: Retrieves contacts, with pagination and search capabilities.
- **Update Contact**: Updates the details of an existing contact.
- **Delete Contact**: Removes a contact from the database.
- **Export Contacts to CSV**: Exports all contact data as a downloadable CSV file.

## Project Structure

```
backend/
├── src/
│   ├── app.js                # Main server file, configures Express and API routes
│   ├── database.js           # Database configuration and connection to MySQL
│   ├── contactsController.js # Controller file with functions handling CRUD operations
├── package.json              # Project dependencies and scripts
└── README.md                 # Project description and instructions (this file)
```

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd backend
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Database Configuration**:
   - Create a MySQL database for storing contacts.
   - Update `database.js` with your MySQL credentials and database information.

4. **Run the Server**:
   ```
   node src/app.js
   ```
   Or use **PM2** to manage the server:
   ```
   pm2 start src/app.js --name "contacts_backend"
   ```

## API Endpoints

- `POST /api/contacts`: Add a new contact.
- `GET /api/contacts`: Retrieve all contacts, with pagination support.
- `PUT /api/contacts/:id`: Update an existing contact by ID.
- `DELETE /api/contacts/:id`: Delete a contact by ID.
- `GET /api/contacts/export`: Export contacts to a CSV file.

## Dependencies

- **Express.js**: Web framework for handling API requests.
- **MySQL2**: MySQL client for Node.js.
- **Body-Parser**: Middleware for parsing JSON in request bodies.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.

## Notes

- Ensure the frontend is configured to communicate with the correct backend URL.
- The database connection must be correctly configured for API functionality.

