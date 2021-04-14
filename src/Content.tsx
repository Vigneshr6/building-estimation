import { IonContent, IonFooter, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonListHeader, IonPage, IonRadio, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { getRBCMethodCost } from "./service/CivilWorkService";
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

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
                        <FormControl>
                            <Select
                                value={civilWork}
                                onChange={e => setCivilWork(e.target.value as string)}
                            >
                                <MenuItem value="redClayBrick">Red Clay Brick</MenuItem>
                                <MenuItem value="solidBlock">Solid Block</MenuItem>
                                <MenuItem value="aerogon">Aerogon</MenuItem>
                            </Select>
                        </FormControl>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Flooring</IonLabel>
                        <FormControl>
                            <Select value={flooring} placeholder="Select One" onChange={e => setFlooring(e.target.value as string)}>
                                <MenuItem value="tiles">Tiles</MenuItem>
                                <MenuItem value="graniteMarble">Granite/Marble</MenuItem>
                            </Select>
                        </FormControl>
                    </IonItem>
                    <IonItem>
                        <FormControl>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox slot="end" onChange={e => setGrillWork(e.target.checked)} />} label="Grill work" labelPlacement="start"/>
                            </FormGroup>
                        </FormControl>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Plumbing</IonLabel>
                        <Checkbox slot="end" onChange={e => setPlumbing(e.target.checked)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Kitchen Stage & Wall DADO</IonLabel>
                        <Checkbox slot="end" onChange={e => setkitchenWall(e.target.checked)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Electrical</IonLabel>
                        <Checkbox slot="end" onChange={e => setElectrical(e.target.checked)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Joinery</IonLabel>
                        <Checkbox slot="end" onChange={e => setJoinery(e.target.checked)} />
                    </IonItem>
                    {joinery ? (
                        <IonItem>
                            <IonLabel>UPVC/Alluminium window</IonLabel>
                            <Checkbox slot="end" onChange={e => setUpvc(e.target.checked)} />
                        </IonItem>
                    ) : ""}
                    <IonItem>
                        <IonLabel>Painting</IonLabel>
                        <Checkbox slot="end" onChange={e => setPainting(e.target.checked)} />
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