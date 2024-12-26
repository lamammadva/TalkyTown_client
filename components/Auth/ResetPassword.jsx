import React from "react";
import "../../static/reset.css";
import Link from "next/link";
const ResetPassword = () => {
  return (
    <div class="reset-password-container">
      <h2>Yeni Şifrə Təyin Et</h2>
      <form>
        <div class="form-group">
          <label for="new-password">Yeni Şifrə</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirm-new-password">Yeni Şifrəni Təsdiqlə</label>
          <input
            type="password"
            id="confirm-new-password"
            name="confirm-new-password"
            required
          />
        </div>
        <button type="submit" class="reset-btn">
          Şifrəni Yenilə
        </button>
      </form>
      <div class="login-link">
        <Link href="/login">Giriş səhifəsinə qayıt</Link>
      </div>
    </div>
  );
};

export default ResetPassword;
