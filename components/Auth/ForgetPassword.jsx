import React from "react";
import "../../static/forget.css";
import Link from "next/link";
const ForgetPassword = () => {
  return (
    <div class="forget-password-container">
      <h2>Şifrəni Unutmusan?</h2>
      <p>
        E-poçt ünvanınızı daxil edin. Şifrənizi sıfırlamaq üçün təlimatlar
        göndərəcəyik.
      </p>
      <form>
        <div class="form-group">
          <input type="email" placeholder="E-poçt ünvanı" required />
        </div>
        <button type="submit" class="reset-btn">
          Şifrəni Sıfırla
        </button>
      </form>
      <div class="login-link">
        <Link href="/login">Geri qayıt</Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
