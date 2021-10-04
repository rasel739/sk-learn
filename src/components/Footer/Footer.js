import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
      <Container fluid className="pt-5 pb-3 bg-dark">
        <Container>
          <div className="">
            <Table borderless className=" text-white">
              <thead>
                <tr>
                  <th>Home</th>
                  <th>Courses</th>
                  <th>Pages</th>
                  <th>Feature</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Learning</td>
                  <td>All Course</td>
                  <td>Home</td>
                  <td>Advance Course</td>
                </tr>
                <tr>
                  <td>Partner</td>
                  <td>HTML Course</td>
                  <td>Contact</td>
                  <td>Others Course</td>
                </tr>
                <tr>
                  <td>Populer Course</td>
                  <td>Programming Course</td>
                  <td>About</td>
                  <td>Academic Course</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="border-top pt-3">
            <p className="text-white">&copy; 2021 SKlearn Education Private Limited. All rights reserved</p>
          </div>
        </Container>
      </Container>
    );
};

export default Footer;