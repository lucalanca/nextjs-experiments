import React, {
  Component
} from "react";
import PropTypes from "prop-types";

import initializeCockpitSDK from "../api/initialize-cockpit-sdk";
import fetchEmployees from "../api/fetch-employees";
import EmployeesPropType from "../schemas/employees/prop-type";

export default class extends Component {
  static propTypes = {
    employees: EmployeesPropType.isRequired
  };

  static async getInitialProps() {
    const employees = await fetchEmployees();
    return {
      employees
    };
  }

  componentDidMount() {

  }

  debug = () => {
    debugger;
    fetchEmployees().then(employees => {
      console.log('employees', employees);
      debugger;
    });
  };

  render() {
    const {
      employees
    } = this.props;
    return ( <
      div >
      Hello World <
      pre > {
        JSON.stringify(employees, null, 2)
      } < /pre> <
      button onClick = {
        this.debug
      } > Debug < /button> <
      /div>
    );
  }
}