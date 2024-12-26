"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import "../../static/register.css";


const Register = ({handleInputChange,handleSubmit}) => {
  

  return (
    <div className="register-container">
      <h2>Talky Town'da Qeydiyyat</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            onChange={handleInputChange}
            name="lastname"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">İstifadəçi Adı </label>
          <input
            type="text"
            name="username"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-poçt Ünvanı</label>
          <input
            type="email"
            onChange={handleInputChange}
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Şifrə</label>
          <input
            type="password"
            name="password"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birth">Doğum Tarixi</label>
          <input
            type="date"
            onChange={handleInputChange}
            name="birthDate"
            required
          />
        </div>
        <div className="form-group">
          <label>Cins</label>
          <div className="gender-options">
            <div className="gender-option">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={handleInputChange}
    
              />
              <label htmlFor="male">Kişi</label>
            </div>
            <div className="gender-option">
              <input type="radio" id="female" name="gender" value="female" onChange={handleInputChange} />
              <label htmlFor="female">Qadın</label>
            </div>
            <div className="gender-option">
              <input type="radio" id="other" name="gender" value="other" onChange={handleInputChange} />
              <label htmlFor="other">Digər</label>
            </div>
          </div>
        </div>

        <button type="submit" className="register-btn">
          Qeydiyyatdan Keç
        </button>
      </form>
      <div className="login-link">
        Artıq hesabınız var? <Link href="/login">Giriş edin</Link>
      </div>
    </div>
  );
};
export default Register;
