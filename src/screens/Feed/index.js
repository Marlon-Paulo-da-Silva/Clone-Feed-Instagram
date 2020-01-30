import React from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import options from "../../../assets/options.png";
import like from "../../../assets/like.png";
import comment from "../../../assets/comment.png";
import send from "../../../assets/send.png";
import save from "../../../assets/save.png";

function Feed() {
  const posts = [
    {
      id: "1",
      author: "marlon.psilva",
      picture_url:
        "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/2.jpeg",
      likes: 10,
      description: "Meu espaço de trabalho HomeOffice",
      hashtags: "#Work #Dev",
      place: "Cinema do PrudenShopping"
    },
    {
      id: "2",
      author: "marlon.psilva",
      picture_url:
        "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/3.jpeg",
      likes: 3,
      description: "Meu espaço de trabalho HomeOffice",
      hashtags: "#Work #Dev",
      place: "Cinema do PrudenShopping"
    },
    {
      id: "3",
      author: "marlon.psilva",
      picture_url:
        "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/4.jpeg",
      likes: 40,
      description: "Meu espaço de trabalho HomeOffice",
      hashtags: "#Work #Dev",
      place: "Cinema do PrudenShopping"
    },
    {
      id: "4",
      author: "marlon.psilva",
      picture_url:
        "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/1.jpeg",
      likes: 1002,
      description: "Meu espaço de trabalho HomeOffice",
      hashtags: "#Work #Dev",
      place: "Cinema do PrudenShopping"
    }
  ];

  function renderItem({ item: post }) {
    return (
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>

          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View>
            <Image
              style={styles.picture_url}
              source={{ uri: post.picture_url }}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.action}>
                <Image source={like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Image source={comment} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={send} />
              </TouchableOpacity>
            </View>

            <View style={styles.rightActions}>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.likes}>{post.likes} Likes</Text>
            <Text style={styles.hashtags}>{post.hashtags}</Text>
            <Text style={styles.description}>{post.description}</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  post: { marginVertical: 15 },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 15
  },
  userInfo: {},
  author: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold"
  },
  place: {
    fontSize: 12,
    color: "#666"
  },
  postOptions: {},
  picture_url: {
    width: "100%",
    height: 400
  },
  footer: {
    paddingHorizontal: 15
  },
  actions: {
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between"
  },
  action: {
    marginRight: 8
  },
  leftActions: {
    flexDirection: "row"
  },
  likes: {
    fontWeight: "bold",
    fontSize: 15
  },
  hashtags: { color: "#002D5E" },
  description: {
    color: "#000",
    lineHeight: 18
  }
});

export default Feed;
