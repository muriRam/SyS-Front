"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Save, X } from "lucide-react";
import styles from "./RenovacionForm.module.css";

type DocumentFormData = {
  fecha: string;
  apellido: string;
  nombre: string;
  cuño: string;
  DNI: string;
  empresaPresentadora: string;
  procesoSoldadura: string;
  especificacion: string;
  fechaDeRenovacion: string;
  fechaOriginal: string;
  fechaAnteriorDesde: string;
  fechaAnteriorHasta: string;
  fechaRenovadaDesde: string;
  fechaRenovadaHasta: string;
  nroRenovacion: string;
  registroVerificador: string;
  nroDeCertificado: string;
  observaciones: string;
  nroCertificadoRenovado: string;
  nroCertificadoOriginal: string;
};

const initialState: DocumentFormData = {
  fecha: "",
  apellido: "",
  nombre: "",
  cuño: "",
  DNI: "",
  empresaPresentadora: "",
  procesoSoldadura: "",
  especificacion: "",
  fechaDeRenovacion: "",
  fechaOriginal: "",
  fechaAnteriorDesde: "",
  fechaAnteriorHasta: "",
  fechaRenovadaDesde: "",
  fechaRenovadaHasta: "",
  nroRenovacion: "",
  registroVerificador: "",
  nroDeCertificado: "",
  observaciones: "",
  nroCertificadoRenovado: "",
  nroCertificadoOriginal: "",
};

export const RenovacionForm = () => {
  const [formData, setFormData] = useState<DocumentFormData>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      const fechaAnteriorHasta = name === "fechaAnteriorHasta" ? value : prev.fechaAnteriorHasta;
      const fechaDeRenovacion = name === "fechaDeRenovacion" ? value : prev.fechaDeRenovacion;

      if (!fechaAnteriorHasta || !fechaDeRenovacion) return updated;

      const fechaRenovacion = new Date(fechaDeRenovacion);
      const fechaHasta = new Date(fechaAnteriorHasta);
      const diasDeDiferencia = (fechaHasta.getTime() - fechaRenovacion.getTime()) / (1000 * 60 * 60 * 24);

      if (diasDeDiferencia < 30) {
        fechaHasta.setDate(fechaHasta.getDate() + 1);
        fechaHasta.setMonth(fechaHasta.getMonth() + 6);
        return {
          ...updated,
          fechaRenovadaDesde: fechaAnteriorHasta,
          fechaRenovadaHasta: fechaHasta.toISOString().split("T")[0],
        };
      }

      if (diasDeDiferencia > 30) {
        fechaHasta.setDate(fechaRenovacion.getDate() + 1);
        fechaHasta.setMonth(fechaRenovacion.getMonth() + 6);
        return{
          ...updated,
          fechaRenovadaDesde: fechaDeRenovacion,
          fechaRenovadaHasta: fechaHasta.toISOString().split("T")[0],
        }
      }

      return updated;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Renovación a guardar:", formData);
  };

  const handleReset = () => setFormData(initialState);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <h1 className={styles.formTitle}>Renovación de certificado</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Datos del trámite</h2>
          <div className={styles.row2}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="fecha">Fecha</label>
              <input className={styles.input} type="date" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="empresaPresentadora">Empresa presentadora</label>
              <input className={styles.input} type="text" id="empresaPresentadora" name="empresaPresentadora" value={formData.empresaPresentadora} onChange={handleChange} />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Datos del soldador</h2>
          <div className={styles.row2}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="apellido">Apellido</label>
              <input className={styles.input} type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="nombre">Nombre</label>
              <input className={styles.input} type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="DNI">DNI</label>
              <input className={styles.input} type="text" id="DNI" name="DNI" inputMode="numeric" value={formData.DNI} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="cuño">Cuño</label>
              <input className={styles.input} type="text" id="cuño" name="cuño" value={formData.cuño} onChange={handleChange} />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Datos técnicos</h2>
          <div className={styles.row2}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="procesoSoldadura">Proceso de soldadura</label>
              <input className={styles.input} type="text" id="procesoSoldadura" name="procesoSoldadura" value={formData.procesoSoldadura} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="especificacion">Especificación</label>
              <input className={styles.input} type="text" id="especificacion" name="especificacion" value={formData.especificacion} onChange={handleChange} />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Datos de la renovación</h2>
          <div className={styles.row3}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="nroRenovacion">N° de renovación</label>
              <input className={styles.input} type="text" id="nroRenovacion" name="nroRenovacion" value={formData.nroRenovacion} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="fechaDeRenovacion">Fecha de renovación</label>
              <input className={styles.input} type="date" id="fechaDeRenovacion" name="fechaDeRenovacion" value={formData.fechaDeRenovacion} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="fechaOriginal">Fecha original</label>
              <input className={styles.input} type="date" id="fechaOriginal" name="fechaOriginal" value={formData.fechaOriginal} onChange={handleChange} />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Períodos de vigencia</h2>
          <div className={styles.periodos}>
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Vigencia anterior</h3>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="fechaAnteriorDesde">Desde</label>
                  <input className={styles.input} type="date" id="fechaAnteriorDesde" name="fechaAnteriorDesde" value={formData.fechaAnteriorDesde} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="fechaAnteriorHasta">Hasta</label>
                  <input className={styles.input} type="date" id="fechaAnteriorHasta" name="fechaAnteriorHasta" value={formData.fechaAnteriorHasta} onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Vigencia renovada</h3>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="fechaRenovadaDesde">Desde</label>
                  <input className={styles.input} type="date" id="fechaRenovadaDesde" name="fechaRenovadaDesde" value={formData.fechaRenovadaDesde} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="fechaRenovadaHasta">Hasta</label>
                  <input className={styles.input} type="date" id="fechaRenovadaHasta" name="fechaRenovadaHasta" value={formData.fechaRenovadaHasta} onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Certificados</h2>
          <div className={styles.row3}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="nroDeCertificado">N° de certificado</label>
              <input className={styles.input} type="text" id="nroDeCertificado" name="nroDeCertificado" value={formData.nroDeCertificado} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="nroCertificadoOriginal">N° certificado original</label>
              <input className={styles.input} type="text" id="nroCertificadoOriginal" name="nroCertificadoOriginal" value={formData.nroCertificadoOriginal} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="nroCertificadoRenovado">N° certificado renovado</label>
              <input className={styles.input} type="text" id="nroCertificadoRenovado" name="nroCertificadoRenovado" value={formData.nroCertificadoRenovado} onChange={handleChange} />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Verificación</h2>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="registroVerificador">Registro del verificador</label>
            <input className={styles.input} type="text" id="registroVerificador" name="registroVerificador" value={formData.registroVerificador} onChange={handleChange} />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Observaciones</h2>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="observaciones">Observaciones</label>
            <textarea className={styles.textarea} id="observaciones" name="observaciones" value={formData.observaciones} onChange={handleChange} rows={4} />
          </div>
        </section>

        <div className={styles.actions}>
          <button type="button" className={`${styles.btn} ${styles.btnSecondary}`} onClick={handleReset}>
            <X size={18} />
            Cancelar
          </button>
          <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
            <Save size={18} />
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RenovacionForm;