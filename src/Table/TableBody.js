// @flow

import React from 'react';
import type { ComponentType, Node } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = (theme: Object) => ({
  root: {
    fontSize: 13,
    color: theme.palette.text.primary,
  },
});

type DefaultProps = {
  classes: Object,
  component: string,
};

export type Props = {
  /**
   * The content of the component, normally `TableRow`.
   */
  children?: Node,
  /**
   * Useful to extend the style applied to components.
   */
  classes?: Object,
  /**
   * @ignore
   */
  className?: string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component?: string | ComponentType<*>,
};

type AllProps = DefaultProps & Props;

class TableBody extends React.Component<AllProps, void> {
  props: AllProps;

  static defaultProps = {
    component: 'tbody',
  };

  getChildContext() {
    // eslint-disable-line class-methods-use-this
    return {
      table: {
        body: true,
      },
    };
  }

  render() {
    const {
      classes,
      className: classNameProp,
      children,
      component: ComponentProp,
      ...other
    } = this.props;
    const className = classNames(classes.root, classNameProp);

    return (
      <ComponentProp className={className} {...other}>
        {children}
      </ComponentProp>
    );
  }
}

TableBody.contextTypes = {
  table: PropTypes.object,
};

TableBody.childContextTypes = {
  table: PropTypes.object,
};

export default withStyles(styles, { name: 'MuiTableBody' })(TableBody);
