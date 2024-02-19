import configServer from "../config/configServer";
import { transporter } from "../config/nodemailerConfig";
import BadRequestException from "../errors/BadRequestException";
import { EmailBody, Emails } from "../interfaces/Emails.interface";
import EmailsModel from "../models/Emails.model";

class EmailSender {
  private collection;
  constructor() {
    this.collection = EmailsModel;
  }

  send = async (receiver: EmailBody) => {
    const { email } = receiver;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") throw new BadRequestException("Email is required");
    if (!emailRegex.test(email)) throw new BadRequestException("Invalid email");

    const findCustomerInDB = await this.collection.findOne({ to: email });

    const emailInfo = await transporter.sendMail({
      from: configServer.mailer.user,
      to: email,
      subject: "Nexus: ¡Descubre más acerca de servicios! 🔥",
      html: `
                      <h1>¡Hola, es un placer poder estar un paso más cerca de usted!</h1>
      
                      <p>
                      Espero que estés teniendo un día genial. Nosotros somos <a href="https://nexusdigitalar.com/" target="_blank"><strong>Nexus Digital</strong></a>, y estamos emocionados de compartir contigo la clave para llevar tu presencia en línea al siguiente nivel.
                      </p>
      
                      <p>
                      No solo construimos sitios web, creamos experiencias digitales que cautivan a tu audiencia.<br> Nuestro equipo de expertos en diseño, desarrollo y estrategia está listo para impulsar tu negocio hacia el éxito en línea.
                      </p>
                      <br>
      
                      <h2><strong>Nuestros Servicios Destacados 🌐:</strong></h2>
                      <p>
                      <ul>
                          <li><strong>Desarrollo Web Full Stack:</strong> Soluciones web personalizadas para adaptarse perfectamente a las necesidades exclusivas de tu negocio.</li>
                          <br>
                          <li><strong>Desarrollo de APIs: </strong> Creamos APIs RESTful eficientes facilitando la integración y la expansión de funcionabilidades.</li>
                          <br>
                          <li><strong>Landing pages:</strong> Construimos sitios web estáticos y aplicaciones de una sola página (SPA).</li>
                          <br>
                          <li><strong>Desarrollo de aplicaciones en tiempo real:</strong> Implementamos funcionabilidades de tiempo real, para el desarrollo de aplicaciones tipo chat o colaborativas.</li>
                          <br>
                          <li><strong>Integración de base de datos:</strong> Conectamos su aplicación web a una base de datos, ya sea NoSQL como SQL.</li>
                          <br>
                          <li><strong>Migración de base de datos:</strong> Ayudamos a los clientes en la migración de datos de un sistema de base de datos a otro, asegurando una transición suave y sin pérdida de información crítica.</li>
                          <br>
                          <li><strong>Consultoría y Auditoría de Código:</strong> Realizamos revisiones exhaustivas del código existente para mejorar su calidad y eficiencia.</li>
                          <br>
                          <li><strong>Optimización de Rendimiento:</strong> Mejoramos el rendimiento de aplicaciones web mediante la optimización del código y la implementación de prácticas recomendadas.</li>
                          <br>
                          <li><strong>Optimización SEO Avanzada:</strong> Aumentamos tu visibilidad en los motores de búsqueda para que tu audiencia te encuentre fácilmente.</li>
                      </ul>
                      
                      </p>   
                      <br>
      
                      <h2>¿Por qué elegirnos? 🤔</h2>
                      <p>
                          <ul>
                              <li>Experiencia comprobada con clientes satisfechos.</li>
                              <li>Enfoque centrado en el cliente y soluciones personalizadas.</li>
                              <li>Estamos al tanto de las últimas tendencias y tecnologías.</li>
                          </ul>
                      </p>
                      <br>
      
                      <h2>¡Aprovecha nuestra oferta especial! 🔥</h2>
                      <p>
                      Para celebrar nuestra asociación, ofrecemos una prueba gratuita de 7 días.<br> Esto es solo por tiempo limitado, ¡así que no te lo pierdas!
                      </p>
      
                      <p>
                      ¿Quieres saber cómo podemos hacer despegar tu presencia en línea? <br> <strong>Responde a este correo para programar una consulta gratuita.</strong> <br> Estamos aquí para transformar tu visión digital en realidad.
                      </p>
      
                      <p>Gracias por considerarnos. ¡Esperamos con ansias la oportunidad de trabajar contigo!</p>
                      <br>
      
                      <strong>Saludos cordiales,</strong>
                      <br>
                      <strong>Dpto. de contacto,</strong>
                      <br>
                      <strong>Nexus Digital.</strong>
                      <br>
                  `,
    });

    if (!findCustomerInDB) {
      const saveEmailInDB: Emails = {
        from: configServer.mailer.user,
        to: email,
        status: emailInfo.response,
      };
      await this.collection.create(saveEmailInDB);
    }
  };
}

const emailSender = new EmailSender();
export default emailSender;
