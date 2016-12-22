import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, StyleSheet, PixelRatio } from 'react-native';
import Menu, {
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#252526'
  },
  menuButton: {
    marginTop: 10,
    marginLeft: 4
  },
  menuOption: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  menuText: {
    flex: 1,
    paddingLeft: 4,
    paddingTop: 5,
  }
});


export default class AppMenu extends Component {
  static propTypes = {
    handleMenu: React.PropTypes.func
  }

  render() {
    const menuIconProps = { size: 30, color: "grey" };

    return (
      <Menu onSelect={(val) => this.props.handleMenu(val)}>
        <MenuTrigger>
          <Icon name="list"
            size={30} color="darkkhaki"
            style={styles.menuButton} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption value={'home'} style={styles.menuOption}>
            <Icon name="home" {...menuIconProps} />
            <Text style={styles.menuText}>
              Home
            </Text>
          </MenuOption>
          <MenuOption value={'latest'} style={styles.menuOption}>
            <Icon name="refresh" {...menuIconProps} />
            <Text style={styles.menuText}>
              Recent feedback
            </Text>
          </MenuOption>
          <MenuOption value={'search'} style={styles.menuOption}>
            <Icon name="search" {...menuIconProps} />
            <Text style={styles.menuText}>
              Search..
            </Text>
          </MenuOption>
          <MenuOption value={'feedback'} style={styles.menuOption}>
            <Icon name="star" {...menuIconProps} />
            <Text style={styles.menuText}>
              Leave feedback
            </Text>
          </MenuOption>
          <MenuOption value={'signout'} style={styles.menuOption}>
            <Icon name="user" {...menuIconProps} />
            <Text style={styles.menuText}>
              Sign out..
            </Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    );
  }
}
