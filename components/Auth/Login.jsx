import React from 'react'
import Link from 'next/link'
function Login({handleLogin,loginSubmit}) {
  return (
    <div className="login-container">
    <h2>Talky Town'a Giriş</h2>
    <form onSubmit={loginSubmit}>
        <div className="form-group">
            <label htmlFor="username">İstifadəçi adı</label>
            <input type="text"  name="username" onChange={handleLogin} required/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Şifrə</label>
            <input type="password"  name="password" onChange={handleLogin}  required/>
        </div>
        <button type="submit" className="login-btn">Daxil Ol</button>
    </form>
    <div className="extra-links">
        <Link href="/forget">Şifrəni unutmusan?</Link>
        <Link href="/register">Qeydiyyat</Link>
    </div>
</div>

  )
}

export default Login