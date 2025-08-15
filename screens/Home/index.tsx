import { LinearGradient } from "expo-linear-gradient";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import Bookmark from "../../assets/Bookmark.svg";
import Comment from "../../assets/Comment.svg";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import Heart from "../../assets/Heart.svg";
import image from "../../assets/image.png";
import Logo from "../../assets/logo.svg";
import Message from "../../assets/message.svg";
import Points from "../../assets/points.svg";
import Share from "../../assets/Share.svg";
import Stroke from "../../assets/stroke.svg";
interface Post {
  id: string;
  profileName: string;
  profileImage: string;
  postImage: any;
  caption: string;
  comments: number;
  time: string;
}
interface Story {
  id: string;
  pathURL: any;
}
const STORIES_DATA: Story[] = [
  { id: "story-1", pathURL: foto },
  { id: "story-2", pathURL: foto2 },
  { id: "story-3", pathURL: foto3 },
  { id: "story-4", pathURL: foto4 },
];
const POSTS_DATA: Post[] = [
  {
    id: "post-1",
    profileName: "rodrigo_lucas",
    profileImage: "https://github.com/rodrigo322.png",
    postImage: image,
    caption: "clicslab How IOT is changing the world?",
    comments: 3,
    time: "3 hours ago",
  },
  {
    id: "post-2",
    profileName: "tech_insights",
    profileImage: "https://placehold.co/100x100/3498db/ffffff?text=TI",
    postImage: foto2,
    caption: "The latest in AI advancements.",
    comments: 7,
    time: "1 day ago",
  },
  {
    id: "post-3",
    profileName: "clicslab_official",
    profileImage: "https://placehold.co/100x100/d52865/ffffff?text=CS",
    postImage: foto3,
    caption: "Excited to announce our new project!",
    comments: 15,
    time: "1 hour ago",
  },
];
const ReelsScreen = () => (
  <View style={styles.placeholderScreen}>
    <Text style={styles.placeholderText}>Tela de Reels</Text>
  </View>
);
const SearchScreen = () => (
  <View style={styles.placeholderScreen}>
    <Text style={styles.placeholderText}>Tela de Busca</Text>
  </View>
);
const AddScreen = () => (
  <View style={styles.placeholderScreen}>
    <Text style={styles.placeholderText}>Adicionar Nova Foto</Text>
  </View>
);
const ProfileScreen = () => (
  <View style={styles.placeholderScreen}>
    <Text style={styles.placeholderText}>Tela de Perfil</Text>
  </View>
);
const PostComponent = ({ post }: { post: Post }) => (
  <View style={styles.content}>
    <View style={styles.contentHeader}>
      <View style={styles.contentHeaderLeft}>
        <Image style={styles.contentHeaderLeftImage} source={{ uri: post.profileImage }} />
        <Text style={styles.contentHeaderLeftText}>{post.profileName}</Text>
      </View>
      <Points />
    </View>
    <View style={styles.contentImage}>
      <Image source={post.postImage} style={styles.postImage} resizeMode="cover" />
    </View>
    <View style={styles.contentFooter}>
      <View style={styles.contentFooterOptions}>
        <View style={styles.contentFooterOptionsButton}>
          <Heart />
          <Comment />
          <Share />
        </View>
        <Bookmark />
      </View>
      <View style={styles.contentFooterTexts}>
        <Text style={styles.contentFooterText1}>{post.caption}</Text>
        <Text style={styles.contentFooterText2}>Ver todos os {post.comments} comentários</Text>
        <Text style={styles.contentFooterText3}>{post.time} Ver tradução</Text>
      </View>
    </View>
  </View>
);
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo width={127} height={49} />
        <View style={styles.headerOptions}>
          <Stroke />
          <Message />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.stores}>
          <FlatList
            data={STORIES_DATA}
            horizontal={true}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <LinearGradient
                colors={["#D52865", "#F7B55A"]}
                style={styles.storesCard}
              >
                <Image
                  style={styles.storesCardImage}
                  source={item.pathURL}
                />
              </LinearGradient>
            )}
          />
        </View>
        <FlatList
          data={POSTS_DATA}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <PostComponent post={item} />}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default function App() {
  const [activeScreen, setActiveScreen] = useState("Home");
  const renderScreen = () => {
    switch (activeScreen) {
      case "Home":
        return <Home />;
      case "Search":
        return <SearchScreen />;
      case "Reels":
        return <ReelsScreen />;
      case "Add":
        return <AddScreen />;
      case "Profile":
        return <ProfileScreen />;
      default:
        return <Home />;
    }
  };
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.mainContent}>
        {renderScreen()}
      </View>
      <View style={styles.bottomTabBar}>
        <TouchableOpacity onPress={() => setActiveScreen("Home")}>
          <Text style={[styles.tabIcon, activeScreen === "Home" && styles.activeTab]}>🏡</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen("Search")}>
          <Text style={[styles.tabIcon, activeScreen === "Search" && styles.activeTab]}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen("Add")}>
          <Text style={[styles.tabIcon, activeScreen === "Add" && styles.activeTab]}>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen("Reels")}>
          <Text style={[styles.tabIcon, activeScreen === "Reels" && styles.activeTab]}>▶️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen("Profile")}>
          <Text style={[styles.tabIcon, activeScreen === "Profile" && styles.activeTab]}>👤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerOptions: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  stores: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 10,
  },
  storesCard: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  storesCardImage: {
    width: 66,
    height: 66,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#000",
  },
  content: {
    width: "100%",
    marginBottom: 20,
  },
  contentHeader: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  contentHeaderLeft: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  contentHeaderLeftText: {
    color: "#fff",
  },
  contentImage: {
    width: "100%",
    height: 355,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  contentFooter: {},
  contentFooterOptions: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentFooterOptionsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  contentFooterTexts: {
    color: "#fff",
    fontSize: 14,
    paddingHorizontal: 20,
  },
  contentFooterText1: {
    color: "#fff",
    fontSize: 14,
    paddingHorizontal: 20,
  },
  contentFooterText2: {
    color: "#fff",
    fontSize: 14,
    paddingHorizontal: 20,
  },
  contentFooterText3: {
    color: "#fff",
    fontSize: 10,
    paddingHorizontal: 20,
  },
  appContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  mainContent: {
    flex: 1,
  },
  bottomTabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#333",
    backgroundColor: "#000",
  },
  tabIcon: {
    fontSize: 24,
    color: "#fff",
    opacity: 0.5,
  },
  activeTab: {
    opacity: 1,
  },
  placeholderScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
