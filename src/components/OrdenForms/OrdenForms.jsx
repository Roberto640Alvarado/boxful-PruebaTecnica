import React, { useState } from 'react';
import './OrdenForms.css';
import 'antd/dist/reset.css';
import elSalvadorFlag from '../../assets/el-salvador.png';
import usaFlag from '../../assets/eeuu.png';
import locationIcon from '../../assets/gps.png';

import { Typography, Row, Col, Input, DatePicker, Select, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const OrdenForm = () => {
    const navigate = useNavigate();
    const [countryCode, setCountryCode] = useState('+503');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [pickupAddress, setPickupAddress] = useState('');
    const [scheduledDate, setScheduledDate] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [recipientAddress, setRecipientAddress] = useState('');
    const [department, setDepartment] = useState('San Salvador');
    const [municipality, setMunicipality] = useState('San Salvador');
    const [referencePoint, setReferencePoint] = useState('');
    const [instructions, setInstructions] = useState('');

    //Cambios en el select de país
    const handleCountryChange = (value) => {
        setCountryCode(value);
        setPhoneNumber('');
    };

    //Los cambios en el input de teléfono
    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    //Función para enviar los datos a la siguiente página
    const handleSubmit = () => {
        const formData = {
            pickupAddress,
            scheduledDate: scheduledDate ? scheduledDate.format("DD/MM/YYYY") : null,
            firstName,
            lastName,
            email,
            phone: `${countryCode} ${phoneNumber}`,
            recipientAddress,
            department,
            municipality,
            referencePoint,
            instructions,
        };

        navigate('/package', { state: formData });
    };

    return (
        <div className="main-box">
            <Row gutter={16} align="middle">
                <Col span={18}>
                    <Text className="label">📍 Dirección de recolección</Text>
                    <Select
                        defaultValue="Seleccione una opción"
                        className="input-box long-input"
                        onChange={(value) => setPickupAddress(value)}
                    >
                        <Option value="Opcion 1">Opcion 1</Option>
                        <Option value="Opcion 2">Opcion 2</Option>
                        <Option value="Opcion 3">Opcion 3</Option>
                    </Select>
                </Col>
                <Col span={6}>
                    <Text className="label">📅 Fecha Programada</Text>
                    <DatePicker
                        placeholder="Selecciona una fecha"
                        format="DD/MM/YYYY"
                        className="date-picker"
                        suffixIcon={null}
                        onChange={(date) => setScheduledDate(date)}
                    />
                </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: '20px' }}>
                <Col span={8}>
                    <Text className="label">Nombres</Text>
                    <Input
                        placeholder="Ingrese un nombre..."
                        className="input-field"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Col>
                <Col span={8}>
                    <Text className="label">Apellidos</Text>
                    <Input
                        placeholder="Ingrese un apellido..."
                        className="input-field"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Col>
                <Col span={8}>
                    <Text className="label">Correo Electrónico</Text>
                    <Input
                        type="email"
                        placeholder="Ingrese un correo..."
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: '20px' }}>
                <Col span={6}>
                    <Text className="label">Teléfono</Text>
                    <Input
                        type="text"
                        addonBefore={
                            <Select
                                value={countryCode}
                                onChange={handleCountryChange}
                            >
                                <Option value="+503">
                                    <img src={elSalvadorFlag} alt="El Salvador" style={{ width: '20px', marginRight: '8px' }} /> +503
                                </Option>
                                <Option value="+1">
                                    <img src={usaFlag} alt="USA" style={{ width: '20px', marginRight: '8px' }} /> +1
                                </Option>
                            </Select>
                        }
                        placeholder="Número de teléfono"
                        className="no-border "
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                    />
                </Col>
                <Col span={18}>
                    <Text className="label">Dirección del destinatario</Text>
                    <div className="input-with-icon">
                        <img src={locationIcon} alt="Location Icon" className="location-icon" />
                        <Input
                            placeholder="Ingrese una ubicación..."
                            className="input-field"
                            value={recipientAddress}
                            onChange={(e) => setRecipientAddress(e.target.value)}
                        />
                    </div>
                </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: '20px' }}>
                <Col span={8}>
                    <Text className="label">Departamento</Text>
                    <Select
                        value={department}
                        className="input-box no-border"
                        onChange={(value) => setDepartment(value)}
                    >
                        <Option value="San Salvador">San Salvador</Option>
                        <Option value="Santa Ana">Santa Ana</Option>
                        <Option value="San Miguel">San Miguel</Option>
                        <Option value="La Libertad">La Libertad</Option>
                    </Select>
                </Col>
                <Col span={8}>
                    <Text className="label">Municipio</Text>
                    <Select
                        value={municipality}
                        className="input-box no-border"
                        onChange={(value) => setMunicipality(value)}
                    >
                        <Option value="San Salvador">San Salvador</Option>
                        <Option value="Santa Ana">Santa Ana</Option>
                        <Option value="San Miguel">San Miguel</Option>
                        <Option value="La Libertad">La Libertad</Option>
                    </Select>
                </Col>
                <Col span={8}>
                    <Text className="label">Punto de Referencia</Text>
                    <Input
                        placeholder="Ingrese un lugar de referencia..."
                        className="input-field"
                        value={referencePoint}
                        onChange={(e) => setReferencePoint(e.target.value)}
                    />
                </Col>
            </Row>

            <Row style={{ marginTop: '20px' }}>
                <Col span={24}>
                    <Text className="label">Indicaciones</Text>
                    <TextArea
                        placeholder="Ingrese indicaciones..."
                        className="textarea-field"
                        rows={3}
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                    />
                </Col>
            </Row>

            <Row justify="end" style={{ marginTop: '20px' }}>
                <Button className="next-button" onClick={handleSubmit}>
                    Siguiente <ArrowRightOutlined />
                </Button>
            </Row>
        </div>
    );
};

export default OrdenForm;
