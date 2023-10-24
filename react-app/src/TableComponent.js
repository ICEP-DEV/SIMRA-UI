import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const TableComponent = () => {
    return (
        <Container>
            <Table bordered hover striped responsive="md">
                <thead>
                    <tr>
                        <th>This study organism</th>
                        <th>Best fit model</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Campylobacter jejuni</td>
                        <td>beta-poisson</td>
                        <td>α = 0.145</td>
                    </tr>
                    <tr>
                        <td>E. coli O157:H7</td>
                        <td>beta-poisson</td>
                        <td>α = 0.4 and β = 45.9</td>
                    </tr>
                    <tr>
                        <td>Salmonella typhi</td>
                        <td>beta-poisson</td>
                        <td>α = 0.21  β = 49.78</td>
                    </tr>
                    <tr>
                        <td>S. Flexneri</td>
                        <td>beta-poisson</td>
                        <td>α = 0.265  β = 1480</td>
                    </tr>
                    <tr>
                        <td>Vibrio cholera</td>
                        <td>beta-poisson</td>
                        <td>α = 0.169  β = 2305</td>
                    </tr>
                    <tr>
                        <td>Cryptosporidium parvum</td>
                        <td>exponential</td>
                        <td>r = 0.059</td>
                    </tr>
                    <tr>
                        <td>Entamoeba coli</td>
                        <td>beta-poisson</td>
                        <td>α = 1.01E-01  N50 = 3.41E+02</td>
                    </tr>
                    <tr>
                        <td>Giardia lambia</td>
                        <td>exponential</td>
                        <td>k = 0.0199</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default TableComponent;
