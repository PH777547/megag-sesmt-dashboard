
"use client";

import { useState } from "react";

const menu = [
  "Visão Geral",
  "Acidentes",
  "Incidentes",
  "Treinamentos",
  "Notificações",
  "Próximas Ações"
];

export default function Home() {
  const [active, setActive] = useState("Visão Geral");

  const cards = [
{ label: "Acidentes oficiais em 2026", value: "11", icon: "🚑", color: "danger" },
    { label: "Incidentes registrados", value: "—", icon: "⚠️" },
    { label: "Colaboradores capacitados", value: "—", icon: "🎓" },
    { label: "Notificações aplicadas", value: "—", icon: "📋" }
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="brand">MEGA G</div>
        <div className="brand-subtitle">
          SEGURANÇA DO TRABALHO
        </div>

        <p style={{ fontSize: 11, color: "#a9c5df" }}>
          MENU PRINCIPAL
        </p>

        {menu.map((item) => (
          <button
            key={item}
            className={`nav-item ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item === "Visão Geral" && "📊 "}
            {item === "Acidentes" && "🚑 "}
            {item === "Incidentes" && "⚠️ "}
            {item === "Treinamentos" && "🎓 "}
            {item === "Notificações" && "📋 "}
            {item === "Próximas Ações" && "📅 "}
            {item}
          </button>
        ))}

        <div style={{ marginTop: 45, fontSize: 11, color: "#a9c5df" }}>
          MEGA SEGURANÇA
          <br />
          A mentalidade que salva vidas.
        </div>
      </aside>

      <main className="main">
        <header className="header">
          <div>
            <h1>{active}</h1>
            <div className="subtitle">
              Dashboard Gerencial do SESMT | Mega G
            </div>
          </div>
          <div>
            <strong>2026</strong>
          </div>
        </header>

        {active === "Visão Geral" && (
          <>
            <div className="cards">
              {cards.map((card) => (
                <div className="card" key={card.label}>
                  <div style={{ fontSize: 25 }}>{card.icon}</div>
                  <div className="card-label">{card.label}</div>
                  <div className={`card-value ${card.color || ""}`}>
                    {card.value}
                  </div>
                </div>
              ))}
            </div>

            
                <section className="panel" style={{ marginBottom: 20 }}>
  <h2>Histórico anual de acidentes</h2>
  <p className="subtitle">
    Comparativo dos acidentes oficiais registrados entre 2024 e 2026.
  </p>

  <div style={{
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    height: 220,
    padding: "25px 10px 10px",
    gap: 25
  }}>
    {[
      { ano: "2024", total: 46 },
      { ano: "2025", total: 18 },
      { ano: "2026", total: 11 }
    ].map((item) => (
      <div key={item.ano} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        height: "100%",
        justifyContent: "flex-end"
      }}>
        <strong style={{ marginBottom: 8 }}>{item.total}</strong>
        <div style={{
          width: "65%",
          maxWidth: 90,
          height: `${(item.total / 46) * 140}px`,
          background: "#1769aa",
          borderRadius: "7px 7px 0 0"
        }} />
        <strong style={{ marginTop: 8 }}>{item.ano}</strong>
      </div>
    ))}
  </div>
</section>
      <div className="content-grid">
              <section className="panel">
                <h2>Indicadores de segurança</h2>
                <p className="subtitle">
                  Acompanhamento dos resultados do SESMT.
                </p>

                <div style={{ marginTop: 25 }}>
                  <strong style={{ color: "#d64545" }}>
                    11 acidentes oficiais em 2026
                  </strong>
                  <div className="subtitle">
                    Total informado para 2026
                  </div>
                </div>

                <div style={{
                  marginTop: 25,
                  padding: 15,
                  background: "#eaf3fc",
                  borderRadius: 8
                }}>
                  <strong>100+</strong>
                  <div className="subtitle">
                    Colaboradores na empresa
                  </div>
                </div>
              </section>

              <section className="panel">
                <h2>Distribuição dos incidentes</h2>
                <p className="subtitle">
                  Os tipos de incidentes aparecerão aqui após os cadastros.
                </p>
                <div style={{
                  textAlign: "center",
                  padding: 35,
                  color: "#718096"
                }}>
                  📊
                  <p>Nenhum dado cadastrado ainda.</p>
                </div>
              </section>
            </div>

            <section className="panel">
              <h2>Próximas ações do SESMT</h2>
              <p className="subtitle">
                Acompanhe as atividades preventivas e os planos de ação.
              </p>
              <div style={{
                padding: 20,
                background: "#f4f7fb",
                borderRadius: 8
              }}>
                Nenhuma ação cadastrada. Em breve você poderá adicionar
                responsáveis, prazos e status.
              </div>
            </section>
          </>
        )}

{active === "Acidentes" && (
  <>
    <div className="cards">
      <div className="card">
        <div style={{ fontSize: 25 }}>🚑</div>
        <div className="card-label">Acidentes com afastamento</div>
        <div className="card-value danger">11</div>
        <div className="subtitle">Total oficial de 2026</div>
      </div>

      <div className="card">
        <div style={{ fontSize: 25 }}>🩹</div>
        <div className="card-label">Acidentes sem afastamento</div>
        <div className="card-value">—</div>
        <div className="subtitle">Aguardando base validada</div>
      </div>
    </div>

    <section className="panel" style={{ marginTop: 20 }}>
      <h2>Histórico anual de acidentes</h2>
      <p className="subtitle">
        Comparativo dos totais oficiais registrados entre 2024 e 2026.
      </p>

      <div style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-around",
        height: 220,
        padding: "25px 10px 10px",
        gap: 25
      }}>
        {[
          { ano: "2024", total: 46 },
          { ano: "2025", total: 18 },
          { ano: "2026", total: 11 }
        ].map((item) => (
          <div key={item.ano} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            height: "100%",
            justifyContent: "flex-end"
          }}>
            <strong style={{ marginBottom: 8 }}>{item.total}</strong>
            <div style={{
              width: "65%",
              maxWidth: 90,
              height: `${(item.total / 46) * 140}px`,
              background: "#1769aa",
              borderRadius: "7px 7px 0 0"
            }} />
            <strong style={{ marginTop: 8 }}>{item.ano}</strong>
          </div>
        ))}
      </div>
    </section>
  </>
)}

{active !== "Visão Geral" && active !== "Acidentes" && (
  <section className="panel">
    <h2>{active}</h2>
    <p className="subtitle">
      Área de gerenciamento de {active.toLowerCase()}.
    </p>
    <p>
      Estamos preparando este módulo para permitir cadastros,
      consultas, edição e acompanhamento dos registros.
    </p>
  </section>
)}

        <footer style={{
          textAlign: "center",
          padding: 20,
          color: "#718096",
          fontSize: 12
        }}>
          MEGA G | SESMT | Sistema de Gestão de Segurança do Trabalho
        </footer>
      </main>
    </div>
  );
}
