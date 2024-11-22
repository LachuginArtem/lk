import React, { useState } from 'react';
import styles from './Form.module.css'; 

const Form = () => {
  const [formData, setFormData] = useState({
    top_n: '',
    user: {
      gender: '',
      age: '',
      sport: '',
      foreign: '',
      gpa: '',
      total_points: '',
      bonus_points: '',
      exams: [],
      education: '',
      study_form: ''
    }
  });

  const handleChange = (e) => {
    if (e.target.name === 'exams') {
      let newExams = [...formData.user.exams];
      newExams.push(e.target.value);
      setFormData({ ...formData, user: { ...formData.user, exams: newExams } });
    } else {
      setFormData({ ...formData, user: { ...formData.user, [e.target.name]: e.target.value } });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://tyuiu-fastapi-rec-sys.onrender.com/rec_sys/recommend/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data); // Логируем ответ от сервера
      alert('Форма успешно отправлена!');
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      alert('Произошла ошибка при отправке формы.');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Количество направлений:
          <input type="number" value={formData.top_n} onChange={(e) => setFormData({ ...formData, top_n: e.target.value })} required />
        </label>

        <fieldset className={styles.fieldset}>
          <label className={styles.label}>
            <select value={formData.user.gender} name="gender" onChange={handleChange} required>
              <option value="">Выберите пол</option>
              <option value="М">Мужской</option>
              <option value="Ж">Женский</option>
            </select>
          </label>

          <label className={styles.label}>
            Возраст:
            <input type="number" value={formData.user.age} name="age" onChange={handleChange} required />
          </label>

          <label className={styles.label}>
            Вид спорта:
            <input type="text" value={formData.user.sport} name="sport" onChange={handleChange} required />
          </label>

          <label className={styles.label}>
            Гражданство:
            <input type="text" value={formData.user.foreign} name="foreign" onChange={handleChange} required />
          </label>

          <label className={styles.label}>
            Средний балл (GPA):
            <input type="number" step="0.01" value={formData.user.gpa} name="gpa" onChange={handleChange} required />
          </label>

          <label className={styles.label}>
            Общее количество баллов:
            <input type="number" value={formData.user.total_points} name="total_points" onChange={handleChange} required />
          </label>

          <label className={styles.label}>
            Дополнительные баллы:
            <input type="number" value={formData.user.bonus_points} name="bonus_points" onChange={handleChange} required />
          </label>

          <label className={styles.label}>
            Экзамены:
            <input type="text" name="exams" onChange={handleChange} placeholder="Введите название экзаменов без пробелов, через запятую" />
          </label>

          <label className={styles.label}>
            Образование:
            <input type="text" value={formData.user.education} name="education" onChange={handleChange} required />
          </label>

          <label className={styles.label}>
            Форма обучения:
            <input type="text" value={formData.user.study_form} name="study_form" onChange={handleChange} required />
          </label>
        </fieldset>

        <button type="submit" className={styles.button}>Отправить</button>
      </form>
    </div>
  );
};

export default Form;