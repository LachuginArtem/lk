import React, { useState } from 'react';
import styles from './Form.module.css';

const HomeSection = () => {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleButtonClick = () => {
        setFormVisible(true); // Показать форму при клике
    };

    const Form = () => {
  const [formData, setFormData] = useState({
    top_n: 0,
    user: {
      gender: '',
      age: 0,
      sport: '',
      foreign: '',
      gpa: 0.0,
      total_points: 0,
      bonus_points: 0,
      exams: [],
      education: '',
      study_form: '',
    },
  });

  // const jsonString = JSON.stringify(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'exams') {
      // Разделяем введенные экзамены через запятую
      const examsArray = value.split(',').map((exam) => exam.trim());
      setFormData({
        ...formData,
        user: { ...formData.user, exams: examsArray },
      });
    } else if (['age', 'gpa', 'total_points', 'bonus_points'].includes(name)) {
      // Приведение числовых полей к числам
      setFormData({
        ...formData,
        user: { ...formData.user, [name]: parseFloat(value) || 0 },
      });
    } else if (name === 'top_n') {
      // Обновляем поле top_n
      setFormData({ ...formData, top_n: parseInt(value, 10) || 0 });
    } else {
      // Обновляем остальные текстовые поля
      setFormData({
        ...formData,
        user: { ...formData.user, [name]: value },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Отправляемые данные:', JSON.stringify(formData, null, 2));


    try {
      const response = await fetch(
        '/rec_sys/recommend/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            mode:'no-cors'
            
          },
          body: JSON.stringify(formData, null, 2),
         
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log('Ответ от сервера:', data); // Логируем ответ
      alert('Данные успешно отправлены!');
    } catch (error) {
      console.error('Ошибка отправки данных:', error);
      alert('Произошла ошибка при отправке данных.');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Количество направлений:
          <input
            type="number"
            value={formData.top_n}
            name="top_n"
            onChange={handleChange}
            required
          />
        </label>

        <fieldset className={styles.fieldset}>
          <label className={styles.label}>
            Пол:
            <select
              value={formData.user.gender}
              name="gender"
              onChange={handleChange}
              required
            >
              <option value="">Выберите пол</option>
              <option value="М">Мужской</option>
              <option value="Ж">Женский</option>
            </select>
          </label>

          <label className={styles.label}>
            Возраст:
            <input
              type="number"
              value={formData.user.age}
              name="age"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Вид спорта:
            <input
              type="text"
              value={formData.user.sport}
              name="sport"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Гражданство:
            <input
              type="text"
              value={formData.user.foreign}
              name="foreign"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Средний балл (GPA):
            <input
              type="number"
              step="0.01"
              value={formData.user.gpa}
              name="gpa"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Общее количество баллов:
            <input
              type="number"
              value={formData.user.total_points}
              name="total_points"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Дополнительные баллы:
            <input
              type="number"
              value={formData.user.bonus_points}
              name="bonus_points"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Экзамены:
            <input
              type="text"
              name="exams"
              placeholder="Введите названия через запятую"
              onChange={handleChange}
            />
          </label>

          <label className={styles.label}>
            Образование:
            <input
              type="text"
              value={formData.user.education}
              name="education"
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            Форма обучения:
            <input
              type="text"
              value={formData.user.study_form}
              name="study_form"
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>

        <button type="submit" className={styles.button}>
          Отправить
        </button>
      </form>
    </div>
  );
};

    return (
        <section className="home">
            <div className="content">
            {/* {!isFormVisible && (
                <>
                <h3>О нашей рекомендательной системе</h3>
                
                <button onClick={handleButtonClick} className="btn">Рассчитать</button>
                </>
            )} */}
                {isFormVisible && <Form />}
            </div>
        </section>
    );
};

export default HomeSection;
