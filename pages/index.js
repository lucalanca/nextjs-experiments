import React, { Component } from "react";
import PropTypes from "prop-types";

import fetchEmployees from "../api/fetch-employees";
import EmployeesPropType from "../schemas/employees/prop-type";

export default class extends Component {
  static propTypes = {
    employees: EmployeesPropType.isRequired
  };

  static async getInitialProps() {
    const employees = await fetchEmployees();
    const employeesAgain = await fetchEmployees();
    return {
      employees
    };
  }

  render() {
    const { employees } = this.props;
    return (
      <div>
        Hello World <pre> {JSON.stringify(employees, null, 2)} </pre>{" "}
      </div>
    );
  }
}
