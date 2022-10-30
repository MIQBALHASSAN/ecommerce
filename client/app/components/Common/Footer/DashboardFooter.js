/**
 *
 * Footer
 *
 */

import React from "react";
import { Container } from "reactstrap";

const DashboardFooter = () => {
  return (
    <footer className="dashboard_footer text-center ">
      <Container>
        <div className="copyright">
          <span className="text-light">
            © {new Date().getFullYear()} Copyright{" "}
            <a href="#" rel="noreferrer noopener" className="text-light">
              Online Shopping Center
            </a>
          </span>
          <span className="text-light"> All Right Reserved.</span>
        </div>
      </Container>
    </footer>
  );
};

export default DashboardFooter;
