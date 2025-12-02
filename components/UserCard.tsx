import { toggleFavorite } from '@/state/favoritesSlice';
import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const UserCard = ({ user }: { user: any }) => {

  const dispatch = useDispatch();
  // ✅ Get favorites array from Redux
  const favoriteIds = useSelector((state: any) => state.favorites.ids);

  // ✅ Memoize the check
  const isFavorite = useMemo(
    () => favoriteIds.includes(user.login.uuid),
    [favoriteIds, user.login.uuid]
  );

  const handleToggleFavorite = useCallback(() => {
    dispatch(toggleFavorite(user.login.uuid));
  }, [dispatch, user.login.uuid]);

  return (
    <View style={styles.card}>
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarCircle}>
          {/* user.picture.thumbnail */}
          <Image source={{ uri: user.picture.thumbnail }} style={styles.avatarImage} />
          {/* <Text style={styles.avatarText}>{user.name.charAt(0)}</Text> */}
        </View>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.cardName}>{user.name.first + " " + user.name.last}</Text>
        <Text style={styles.cardEmail}>{user.email}</Text>
      </View>

      <TouchableOpacity style={styles.likeBtn} onPress={handleToggleFavorite}>
        <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color="#FF5D5D" />
      </TouchableOpacity>
    </View>
  );
};
export default UserCard;
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
    marginHorizontal: 2,
    padding: 14,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#1A2E46",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.04)",
  },

  avatarWrapper: {
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  avatarCircle: {
    height: 45,
    width: 45,
    borderRadius: 25,
    backgroundColor: "#A5C8FF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },

  avatarText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },

  cardContent: {
    flex: 1,
    justifyContent: "center",
  },

  avatarImage: {
    height: 45,
    width: 45,
    borderRadius: 25,
  },

  cardName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A2E46",
    marginBottom: 2,
    letterSpacing: 0.2,
  },

  cardEmail: {
    fontSize: 14,
    color: "#7A8BA3",
    fontWeight: "500",
    letterSpacing: 0.1,
  },

  likeBtn: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "rgba(255, 93, 93, 0.08)",
    alignItems: "center",
    justifyContent: "center",
  },

  likeText: {
    fontSize: 20,
    color: "#FF5D5D",
  },
})
