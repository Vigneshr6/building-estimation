import { IonCheckbox, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonListHeader, IonPage, IonRadio, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import {getRBCMethodCost} from "./service/CivilWorkService";

const MyContent: React.FC = () => {
    const [area, setArea] = useState<number>(0);
    const [civilWork, setCivilWork] = useState<string>('redClayBrick');
    const [flooring, setFlooring] = useState<string>('tiles');
    const [grillWork, setGrillWork] = useState<boolean>();
    const [plumbing, setPlumbing] = useState<boolean>();
    const [kitchenWall, setkitchenWall] = useState<boolean>();
    const [electrical, setElectrical] = useState<boolean>();
    const [joinery, setJoinery] = useState<boolean>();
    const [upvc, setUpvc] = useState<boolean>();
    const [painting, setPainting] = useState<boolean>();
    const [total, setTotal] = useState<number>(0);
    return (
        <IonPage>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel>Area</IonLabel>
                        <IonInput type="number" slot="end" value={area} onIonChange={e => setArea(parseInt(e.detail.value!, 10))}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Civil work of building</IonLabel>
                        <IonSelect value={civilWork} placeholder="Select One" onIonChange={e => setCivilWork(e.detail.value!)}>
                            <IonSelectOption value="redClayBrick">Red Clay Brick</IonSelectOption>
                            <IonSelectOption value="solidBlock">Solid Block</IonSelectOption>
                            <IonSelectOption value="aerogon">Aerogon</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Flooring</IonLabel>
                        <IonSelect value={flooring} placeholder="Select One" onIonChange={e => setFlooring(e.detail.value!)}>
                            <IonSelectOption value="tiles">Tiles</IonSelectOption>
                            <IonSelectOption value="graniteMarble">Granite/Marble</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Grill work</IonLabel>
                        <IonCheckbox slot="end" onIonChange={e => setGrillWork(e.detail.checked)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Plumbing</IonLabel>
                        <IonCheckbox slot="end" onIonChange={e => setPlumbing(e.detail.checked)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Kitchen Stage & Wall DADO</IonLabel>
                        <IonCheckbox slot="end" onIonChange={e => setkitchenWall(e.detail.checked)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Electrical</IonLabel>
                        <IonCheckbox slot="end" onIonChange={e => setElectrical(e.detail.checked)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Joinery</IonLabel>
                        <IonCheckbox slot="end" onIonChange={e => setJoinery(e.detail.checked)} />
                    </IonItem>
                    {joinery ? (
                        <IonItem>
                            <IonLabel>UPVC/Alluminium window</IonLabel>
                            <IonCheckbox slot="end" onIonChange={e => setUpvc(e.detail.checked)} />
                        </IonItem>
                    ) : ""}
                    <IonItem>
                        <IonLabel>Painting</IonLabel>
                        <IonCheckbox slot="end" onIonChange={e => setPainting(e.detail.checked)} />
                    </IonItem>
                </IonList>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonItem>
                        <IonLabel>Total Cost</IonLabel>
                        <IonLabel>{Math.floor(civilWork == "redClayBrick" ? getRBCMethodCost(area) : 0)}</IonLabel>
                    </IonItem>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
}

export default MyContent