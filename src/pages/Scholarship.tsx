import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
} from "@ionic/react";

import { useHistory } from "react-router-dom";

const Scholarship: React.FC = () => {
  const scholarStats = {
    als: 45,
    college: 120,
    law: 18,
    medicine: 12,
    shs: 90,
    hs: 110,
  };

  const totalScholars =
    scholarStats.als +
    scholarStats.college +
    scholarStats.law +
    scholarStats.medicine +
    scholarStats.shs +
    scholarStats.hs;

  const history = useHistory();

  const goToStudents = (type: string) => {
    history.push(`/students/${type}`);
  };

  const cardStyle = (bgColor: string) => ({
    backgroundColor: bgColor,
    color: "white",
    borderRadius: "16px",
    padding: "15px",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
    transition: "all 0.25s ease-in-out",
    cursor: "pointer",
  });

  const numberStyle = {
    fontSize: "42px",
    fontWeight: "bold",
    marginTop: "10px",
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ backgroundColor: "#828c9c", color: "white" }}>
          <IonTitle>Scholarship Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        fullscreen
        style={{ backgroundColor: "#F2F9FF" }}
      >
        {/* CENTERED CONTAINER */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "30px",
          }}
        >
        
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeLg="4">
                <IonCard
                  button
                  onClick={() => goToStudents("als")}
                  style={cardStyle("#4F46E5")}
                >
                  <IonCardHeader>
                    <IonCardTitle>ALS Scholars</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div style={numberStyle}>{scholarStats.als}</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="12" sizeLg="4">
                <IonCard
                  button
                  onClick={() => goToStudents("college")}
                  style={cardStyle("#3B82F6")}
                >
                  <IonCardHeader>
                    <IonCardTitle>College Scholars</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div style={numberStyle}>{scholarStats.college}</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="12" sizeLg="4">
                <IonCard
                  button
                  onClick={() => goToStudents("law")}
                  style={cardStyle("#6366F1")}
                >
                  <IonCardHeader>
                    <IonCardTitle>Law Scholars</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div style={numberStyle}>{scholarStats.law}</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12" sizeLg="4">
                <IonCard
                  button
                  onClick={() => goToStudents("medicine")}
                  style={cardStyle("#10B981")}
                >
                  <IonCardHeader>
                    <IonCardTitle>Medicine Scholars</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div style={numberStyle}>{scholarStats.medicine}</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="12" sizeLg="4">
                <IonCard
                  button
                  onClick={() => goToStudents("shs")}
                  style={cardStyle("#d79d37")}
                >
                  <IonCardHeader>
                    <IonCardTitle>SHS Scholars</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div style={numberStyle}>{scholarStats.shs}</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="12" sizeLg="4">
                <IonCard
                  button
                  onClick={() => goToStudents("hs")}
                  style={cardStyle("#2243ff")}
                >
                  <IonCardHeader>
                    <IonCardTitle>HS Scholars</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div style={numberStyle}>{scholarStats.hs}</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12" sizeLg="4">
                <IonCard
                  button
                  onClick={() => goToStudents("all")}
                  style={cardStyle("#ff4646")}
                >
                  <IonCardHeader>
                    <IonCardTitle>Total Scholars</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div style={numberStyle}>{totalScholars}</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Scholarship;