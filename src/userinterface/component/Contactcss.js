body {
  background-color: #0f172a;
  font-family: 'Segoe UI', sans-serif;
  color: #e2e8f0;
  margin: 0;
  padding: 0;
}

.support-section {
  padding: 4rem 1rem;
  /* display: flex;
  flex-direction: row;
  align-items: center; */
}
.support-image img{
  height: 300px;
  width: 400px;
  /* margin-left: 3rem; */
  margin-top: 1.9rem;
 
  background-color: transparent ;
}

.support-container {
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  margin: auto;
  background-color: #1e293b;
  border-radius: 0.8rem;
  padding: 2.5rem 3rem;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
}

.contact-form {
  width: 100%;
}

.contact-form h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.contact-form h2 span {
  color: #3b82f6;
}

.contact-form p {
  color: #94a3b8;
  margin-bottom: 1.5rem;
}

form {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.form-group {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
}

.full-width {
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #d8e2ee;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #334155f1;
  border: none;
  border-radius: 0.3rem;
  color: white;
  font-size: 1rem;
}

.submit-btn {
  background-color: #3b82f6;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  border-radius: 0.3rem;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 1rem;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background-color: #2563eb;
}