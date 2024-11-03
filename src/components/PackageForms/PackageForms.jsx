import './PackageForms.css';
import React, { useState } from 'react';
import 'antd/dist/reset.css';
import packageimage from '../../assets/Package.png';

import { Typography, Row, Col, Input, Button, Divider, Card } from 'antd';
import { PlusOutlined, DeleteOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const { Text } = Typography;

const PackageForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    //Obtener los datos de la orden
    const formDataOrden = location.state || {};
    
    //Estado para guardar los bultos
    const [packages, setPackages] = useState([]);
    //Estado para guardar los datos de los bultos
    const [formData, setFormData] = useState({
        largo: '',
        alto: '',
        ancho: '',
        peso: '',
        contenido: ''
    });

    //Función para manejar los cambios en los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
    //Función para agregar los bultos
    const addPackage = () => {
        setPackages([...packages, formData]);
        setFormData({ largo: '', alto: '', ancho: '', peso: '', contenido: '' });
    };

    //Función para eliminar los bultos
    const deletePackage = (index) => {
        setPackages(packages.filter((_, i) => i !== index));
    };

    //Función para modificar los datos de los bultos
    const handlePackageChange = (index, name, value) => {
        const updatedPackages = packages.map((pkg, i) =>
            i === index ? { ...pkg, [name]: value } : pkg
        );
        setPackages(updatedPackages);
    };

    const handleSend = () => {
        console.log("Order Data:", formDataOrden); //Datos de OrdenForm
        console.log(packages);
    };

    const handleBack = () => {
        navigate('/');
    }

    return (
        <div className="main-box">
            <Text className="title">Agrega tus bultos</Text>
            <div className="add-package">
                <Row gutter={16} align="middle" className="package-row">
                    <Col span={3}>
                        <div className="icon-placeholder">
                            <img src={packageimage} alt="Icon" className="icon" />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="group-juntos">
                            <div>
                                <Text className="label">Largo</Text>
                                <Input className="input-package" suffix="cm" placeholder="0" type="number" name="largo" value={formData.largo} onChange={handleInputChange} />
                            </div>
                            <div>
                                <Text className="label">Alto</Text>
                                <Input className="input-package" suffix="cm" placeholder="0" type="number" name="alto" value={formData.alto} onChange={handleInputChange} />
                            </div>
                            <div>
                                <Text className="label">Ancho</Text>
                                <Input className="input-package" suffix="cm" placeholder="0" type="number" name="ancho" value={formData.ancho} onChange={handleInputChange} />
                            </div>
                        </div>
                    </Col>
                    <Col span={3}>
                        <Text className="label">Peso en libras</Text>
                        <Input className='input-package' suffix="lb" placeholder="0" type="number" name="peso" value={formData.peso} onChange={handleInputChange} />
                    </Col>
                    <Col span={10}>
                        <Text className="label">Contenido</Text>
                        <Input className='input-package' placeholder="Ingresa el contenido..." name="contenido" value={formData.contenido} onChange={handleInputChange} />
                    </Col>
                </Row>
                <Row justify="end">
                    <Col span={24} className="button-col">
                        <Button className="add-button" onClick={addPackage}>
                            Agregar
                            <PlusOutlined />
                        </Button>
                    </Col>
                </Row>
            </div>

            {packages.length > 0 && (
                <>
                    <Divider />
                    <Text className="title">Listado de Bultos</Text>
                    <div className="list-box">
                        {packages.map((pkg, index) => (
                            <Card key={index} className="package-card" style={{ marginBottom: '15px' }}>
                                <Row gutter={16} align="middle">
                                    <Col span={3}>
                                        <Text className="label">Peso en libras</Text>
                                        <Input className="input-package1" value={pkg.peso} suffix="lb" type="number" onChange={(e) => handlePackageChange(index, 'peso', e.target.value)} />
                                    </Col>
                                    <Col span={10}>
                                        <Text className="label">Contenido</Text>
                                        <Input className="input-package" value={pkg.contenido} onChange={(e) => handlePackageChange(index, 'contenido', e.target.value)} />
                                    </Col>

                                    <Col span={3}>
                                        <div className="icon-placeholder">
                                            <img src={packageimage} alt="Icon" className="icon" />
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="group-juntos">
                                            <div>
                                                <Text className="label">Largo</Text>
                                                <Input className="input-package" value={pkg.largo} suffix="cm" type="number" style={{ width: '80px', marginRight: '8px' }} onChange={(e) => handlePackageChange(index, 'largo', e.target.value)} />
                                            </div>
                                            <div>
                                                <Text className="label">Alto</Text>
                                                <Input className="input-package" value={pkg.alto} suffix="cm" type="number" style={{ width: '80px', marginRight: '8px' }} onChange={(e) => handlePackageChange(index, 'alto', e.target.value)} />
                                            </div>
                                            <div>
                                                <Text className="label">Ancho</Text>
                                                <Input className="input-package" value={pkg.ancho} suffix="cm" type="number" style={{ width: '80px' }} onChange={(e) => handlePackageChange(index, 'ancho', e.target.value)} />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row justify="end">
                                    <Col span={1}>
                                        <Button type="link" icon={<DeleteOutlined />} danger onClick={() => deletePackage(index)} />
                                    </Col>
                                </Row>
                            </Card>
                        ))}
                    </div>
                </>
            )}
            <div className="action-buttons">
                <Button icon={<ArrowLeftOutlined />} className="back-button" onClick={handleBack}>Regresar</Button>
                <Button type="primary" className="submit-button" onClick={handleSend}>Enviar   <ArrowRightOutlined /></Button>
            </div>
        </div>
    );
};

export default PackageForm;

