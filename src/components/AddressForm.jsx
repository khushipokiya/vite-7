// AddressForm.js
import React from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import { validationSchema } from './Validationschema';

// Initial values
const initialValues = { 
  name: '',
  email: '',
  addresses: [
    {
      houseNumber: '',
      address: '',
      landmark: '',
    }
  ]
};

// AddressForm Component
const AddressForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-xl">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">User Address Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form Values:', values);
        }}
      >
        {({ values }) => (
          <Form className="space-y-6">
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-1">Name</label>
              <Field
                name="name"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg p-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-1">Email</label>
              <Field
                name="email"
                placeholder="Enter your email"
                type="email"
                className="border border-gray-300 rounded-lg p-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <FieldArray name="addresses">
              {({ }) => (
                <>
                  {values.addresses.length > 0 &&
                    values.addresses.map((_, index) => (
                      <div key={index} className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
                        <div className="mb-4">
                          <label className="block text-lg font-medium text-gray-700 mb-1">House Number</label>
                          <Field
                            name={`addresses.${index}.houseNumber`}
                            placeholder="House Number"
                            className="border border-gray-300 rounded-lg p-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <ErrorMessage
                            name={`addresses.${index}.houseNumber`}
                            component="div"
                            className="text-red-600 text-sm mt-1"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-lg font-medium text-gray-700 mb-1">Address</label>
                          <Field
                            name={`addresses.${index}.address`}
                            placeholder="Address"
                            className="border border-gray-300 rounded-lg p-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <ErrorMessage
                            name={`addresses.${index}.address`}
                            component="div"
                            className="text-red-600 text-sm mt-1"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-lg font-medium text-gray-700 mb-1">Landmark</label>
                          <Field
                            name={`addresses.${index}.landmark`}
                            placeholder="Landmark"
                            className="border border-gray-300 rounded-lg p-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <ErrorMessage
                            name={`addresses.${index}.landmark`}
                            component="div"
                            className="text-red-600 text-sm mt-1"
                          />
                        </div>
                        
                      </div>
                    ))}
                 
                </>
              )}
            </FieldArray>

            <button
              type="submit"
              className="bg-green-600 text-white p-3 rounded-lg text-lg font-medium hover:bg-green-700 mt-6"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddressForm;
