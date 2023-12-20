"use client"// Upload.jsx// Upload.jsx
import { useState } from "react";
import styles from "./Upload.css";

export default function Upload() {
  return (
    <div className="uploadContainer">
      <Card title="New Sale">
        <form className="form">
          <div className="formGroup">
            <label htmlFor="customerName">Customer Name:</label>
            <input type="text" id="customerName" />
          </div>
          <div className="formGroup">
            <label htmlFor="planStartDate">Plan Start Date:</label>
            <input type="date" id="planStartDate" />
          </div>
          <div className="formGroup">
            <label htmlFor="planEndDate">Plan End Date:</label>
            <input type="date" id="planEndDate" />
          </div>
          <div className="formGroup">
            <label htmlFor="subscriptionName">Subscription Name:</label>
            <select id="subscriptionName">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
          </div>
          <div className="formGroup">
            <label htmlFor="customerTypes">Customer Types:</label>
            <select id="customerTypes">
              <option value="new">New</option>
              <option value="renewal">Renewal</option>
            </select>
          </div>
          <div className="formGroup">
            <label htmlFor="invoiceValue">Invoice Value:</label>
            <input type="text" id="invoiceValue" />
          </div>
          <div className="formGroup">
          <label htmlFor="subscriptionName">Seller Name:</label>
            <select id="subscriptionName">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
          </div>
          <button className="greenButton">Submit</button>
        </form>
      </Card>

      <Card title="New Seller">
        <form className="form">
          {/* Campos del Formulario 2 aquí */}
          <div className="formGroup">
            <label htmlFor="sellerName">Seller Name:</label>
            <input type="text" id="sellerName" />
          </div>
          <div className="formGroup">
          <label htmlFor="subscriptionName">Sales Team Name:</label>
            <select id="subscriptionName">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
          </div>
          <div className="formGroup">
            <label htmlFor="sellerStartDate">Seller Start Date:</label>
            <input type="date" id="sellerStartDate" />
          </div>
          <div className="formGroup">
            <label htmlFor="country">Country:</label>
            <select id="country">
              {/* Agrega opciones para el país según sea necesario */}
            </select>
          </div>
          <button className="greenButton">Submit</button>
        </form>
      </Card>

      <Card title="New Team">
        <form className="form">
          {/* Campos del Formulario 3 aquí */}
          <div className="formGroup">
            <label htmlFor="salesTeamName">Sales Team Name:</label>
            <input type="text" id="salesTeamName" />
          </div>
          <div className="formGroup">
            <label htmlFor="salesTeamLeader">Sales Team Leader:</label>
            <input type="text" id="salesTeamLeader" />
          </div>
          <div className="formGroup">
            <label htmlFor="teamCountry">Country:</label>
            <select id="teamCountry">
              {/* Agrega opciones para el país según sea necesario */}
            </select>
          </div>
          <button className="greenButton">Submit</button>
        </form>
      </Card>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="card">
      <h2 className="cardTitle">{title}</h2>
      {children}
    </div>
  );
}
