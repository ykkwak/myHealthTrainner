import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

// 실제 앱에서는 API 호출 등을 통해 사용자 정보를 가져옵니다.
// 여기서는 예시용 목업(mock) 데이터를 사용합니다.
const user = {
  name: '홍길동',
  email: 'gildong.hong@example.com',
  avatarUrl: 'https://i.pravatar.cc/150', // 임의의 아바타 이미지
};

export default function ProfileScreen() {
  const handleEditProfile = () => {
    // 프로필 수정 화면으로 이동하거나 수정 로직을 구현합니다.
    Alert.alert('알림', '프로필 수정 기능이 구현될 예정입니다.');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user.avatarUrl }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>프로필 수정</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7', // 배경색 추가
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // 원형으로 만들기 위해 너비/높이의 절반
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
