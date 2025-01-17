import React, { FC, useState, ReactNode } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

interface PageTemplateProps {
  title: string;
  children: ReactNode;
}

const PageTemplate: FC<PageTemplateProps> = ({ title, children }) => {
  const navigation = useNavigation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuPress = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleMenuItemPress = (menuItem) => {
    setIsMenuVisible(false);
    switch (menuItem) {
      case 'Dashboard':
        navigation.navigate('Dashboard');
        break;
      case 'Add Word':
        navigation.navigate('AddWord');
        break;
      case 'Bring To Mind':
        navigation.navigate('BringToMind');
        break;
      case 'Check Yourself':
        navigation.navigate('CheckYourself');
        break;
      default:
        break;
    }
  };

  const menuItems = [
    { id: '1', title: 'Dashboard' },
    { id: '2', title: 'Add Word' },
    { id: '3', title: 'Bring To Mind' },
    { id: '4', title: 'Check Yourself' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>
        {children}
      </View>

      <Modal
        visible={isMenuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setIsMenuVisible(false)}
        >
          <View style={styles.menuContainer}>
            <FlatList
              data={menuItems}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleMenuItemPress(item.title)}
                >
                  <Text style={styles.menuItemText}>{item.title}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: Platform.OS === 'web' ? '80%' : '100%',
    maxWidth: Platform.OS === 'web' ? 600 : '100%',
    alignSelf: Platform.OS === 'web' ? 'center' : 'auto',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuButton: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  menuContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default PageTemplate;