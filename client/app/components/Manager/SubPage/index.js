/**
 *
 * SubPage
 *
 */

import React from "react";

import Button from "../../Common/Button";

const SubPage = (props) => {
  const { title, actionTitle, handleAction, children } = props;

  return (
    <div className="sub-page">
      <div className="subpage-header p-3 shadow">
        <h3 className="mb-0 title">{title}</h3>
        {actionTitle && (
          <div className="action">
            <Button
              className="btn_style"
              variant="none"
              size="sm"
              text={actionTitle}
              onClick={handleAction}
            />
          </div>
        )}
      </div>
      <div className="subpage-body">{children}</div>
    </div>
  );
};

export default SubPage;
