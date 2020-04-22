import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, TextInput, ScrollView, Dimensions, Alert } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        logoPageDisplay:"block",
        wholesomeMemesPageDisplay: "none",
        dankMemesPageDisplay: "none",
        edgyMemesPageDisplay: "none",
        normieMemesPageDisplay: "none",
        postPageDisplay: "none",
        accountPageDisplay: "none",
        currentUserName: 'SonyTheMod',
        currentUserImage: 'https://codehs.com/uploads/8844b8527e0fcb7a3c0ca0423b153fa6',
        newPostImage: 'Enter Image URI here',
        newAccountImage: 'Enter image URI',
        newAccountName: 'Enter username',
        
        accounts: [
            {
                userImage: 'https://codehs.com/uploads/8844b8527e0fcb7a3c0ca0423b153fa6',
                userName: 'SonyTheMod',
                accountColor: '#ffb86b',
                borderWidth: 2,
            },
        ],
        
        images: [
            {
                userImage: 'https://codehs.com/uploads/8844b8527e0fcb7a3c0ca0423b153fa6',
                userName: 'KarelTheDog',
                likes: 0,
                image: 'https://codehs.com/uploads/085a4a90155ce1024836ae2574b4a9e2',
                heartImage: 'https://codehs.com/uploads/6662bf14bacebce520250ac674f70b2f',
            },
        ]
    }

    handleWholesomeMemesPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "block",
            postPageDisplay: "none",
            accountPageDisplay: "none",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "none",
            edgyMemesPageDisplay: "none",
            normieMemesPageDisplay: "none",
        }))
    );
    
    handleNormieMemesPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "none",
            postPageDisplay: "none",
            accountPageDisplay: "none",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "none",
            edgyMemesPageDisplay: "none",
            normieMemesPageDisplay: "block",
        }))
    );
    
    handleDankMemesPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "none",
            postPageDisplay: "none",
            accountPageDisplay: "none",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "block",
            edgyMemesPageDisplay: "none",
            normieMemesPageDisplay: "none",
        }))
    );
    
    handleEdgyMemesPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "none",
            postPageDisplay: "none",
            accountPageDisplay: "none",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "none",
            edgyMemesPageDisplay: "block",
            normieMemesPageDisplay: "none",
        }))
    );

   
    handlePostPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "none",
            postPageDisplay: "block",
            accountPageDisplay: "none",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "none",
            edgyMemesPageDisplay: "none",
            normieMemesPageDisplay: "none",
        }))
    );

   
    handleAccountPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "none",
            postPageDisplay: "none",
            accountPageDisplay: "block",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "none",
            edgyMemesPageDisplay: "none",
            normieMemesPageDisplay: "none",
        }))
    );

    addLike = (index) => {
        this.state.images[index].likes++;
        this.state.images[index].heartImage = 'https://codehs.com/uploads/221026e89fddbf54945d0d48f300dc98';
        this.setState({
            images: this.state.images
        })
    }
    
    createPost = () => (
        this.state.images.splice(0, 0, {
            userName: this.state.currentUserName,
            userImage: this.state.currentUserImage,
            likes: 0,
            image: this.state.newPostImage,
            heartImage: 'https://codehs.com/uploads/6662bf14bacebce520250ac674f70b2f',
        }),
        // Reset input fields
        this.setState({newPostImage: 'Enter Image URI here'}),
        // Jaden rememer to make multiple post buttons so you can post in the different meme sections so you have to copy and paste this and change this code below
        this.handleWholesomeMemesPagePress()
    )
    
    changeAccount = (index) => {
        for (var i=0; i<this.state.accounts.length; i++) {
            this.state.accounts[i].accountColor = 'white';
            this.state.accounts[i].borderWidth = 0;
        }
        this.state.accounts[index].accountColor = '#ffb86b';
        this.state.accounts[index].borderWidth = 2,
        this.setState({
            accounts: this.state.accounts,
            currentUserName: this.state.accounts[index].userName,
            currentUserImage: this.state.accounts[index].userImage,
        })
    }
    
    createAccount = () => (
        this.state.accounts.splice(0, 0, {
            userName: this.state.newAccountName,
            userImage: this.state.newAccountImage,
            accountColor: 'white',
        }),
        // Reset input fields
        this.setState({newAccountName: 'Enter image URI', newAccountImage: 'Enter username'})
    )
    
  
    render() {
        
        return (
            <View style={styles.container}>
            
            
                <View style={styles.topAndBottomBar}>
                    <Text style={styles.title}>
                        Memes Galore
                    </Text>
                </View>
                
                <View style={{display: this.state.logoPageDisplay}}>
            <TouchableHighlight onPress={this.handleWholesomeMemesPagePress}>
            
            </TouchableHighlight>
            </View>
            
                <View style={{display: this.state.wholesomeMemesPageDisplay}}>
                    <View style={styles.screenCenter}>
                        <ScrollView>
                            {this.state.images.map((info, index) => (
                                <View style={styles.middleContainer}>
                                    <View style={styles.infoBar}>
                                        <Image
                                            source={info.userImage}
                                            style={{ height: 2*(deviceHeight/30), width: 2*(deviceHeight/30) }}
                                        ></Image>
                                        <Text style={styles.infoText}>
                                            {info.userName}
                                        </Text>
                                    </View>
                    
                                    <Image
                                        source={info.image}
                                        style={styles.mainImage}
                                    />
                    
                                    <View style={styles.infoBar}>
                                        <TouchableHighlight
                                            onPress={() => {this.addLike(index)}}
                                        >
                                            <Image
                                                source={info.heartImage}
                                                style={styles.heartIcon}
                                            ></Image>
                                        </TouchableHighlight>
                                        <Text style={styles.infoText}>
                                                {info.likes} Likes
                                            </Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                
                <View style={{display: this.state.normieMemesPageDisplay}}>
                    <View style={styles.screenCenter}>
                        <ScrollView>
                            {this.state.images.map((info, index) => (
                                <View style={styles.middleContainer}>
                                    <View style={styles.infoBar}>
                                        <Image
                                            source={info.userImage}
                                            style={{ height: 2*(deviceHeight/30), width: 2*(deviceHeight/30) }}
                                        ></Image>
                                        <Text style={styles.infoText}>
                                            {info.userName}
                                        </Text>
                                    </View>
                    
                                    <Image
                                        source={info.image}
                                        style={styles.mainImage}
                                    />
                    
                                    <View style={styles.infoBar}>
                                        <TouchableHighlight
                                            onPress={() => {this.addLike(index)}}
                                        >
                                            <Image
                                                source={info.heartImage}
                                                style={styles.heartIcon}
                                            ></Image>
                                        </TouchableHighlight>
                                        <Text style={styles.infoText}>
                                                {info.likes} Likes
                                            </Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                
                <View style={{display: this.state.dankMemesPageDisplay}}>
                    <View style={styles.screenCenter}>
                        <ScrollView>
                            {this.state.images.map((info, index) => (
                                <View style={styles.middleContainer}>
                                    <View style={styles.infoBar}>
                                        <Image
                                            source={info.userImage}
                                            style={{ height: 2*(deviceHeight/30), width: 2*(deviceHeight/30) }}
                                        ></Image>
                                        <Text style={styles.infoText}>
                                            {info.userName}
                                        </Text>
                                    </View>
                    
                                    <Image
                                        source={info.image}
                                        style={styles.mainImage}
                                    />
                    
                                    <View style={styles.infoBar}>
                                        <TouchableHighlight
                                            onPress={() => {this.addLike(index)}}
                                        >
                                            <Image
                                                source={info.heartImage}
                                                style={styles.heartIcon}
                                            ></Image>
                                        </TouchableHighlight>
                                        <Text style={styles.infoText}>
                                                {info.likes} Likes
                                            </Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                
                <View style={{display: this.state.edgyMemesPageDisplay}}>
                    <View style={styles.screenCenter}>
                        <ScrollView>
                            {this.state.images.map((info, index) => (
                                <View style={styles.middleContainer}>
                                    <View style={styles.infoBar}>
                                        <Image
                                            source={info.userImage}
                                            style={{ height: 2*(deviceHeight/30), width: 2*(deviceHeight/30) }}
                                        ></Image>
                                        <Text style={styles.infoText}>
                                            {info.userName}
                                        </Text>
                                    </View>
                    
                                    <Image
                                        source={info.image}
                                        style={styles.mainImage}
                                    />
                    
                                    <View style={styles.infoBar}>
                                        <TouchableHighlight
                                            onPress={() => {this.addLike(index)}}
                                        >
                                            <Image
                                                source={info.heartImage}
                                                style={styles.heartIcon}
                                            ></Image>
                                        </TouchableHighlight>
                                        <Text style={styles.infoText}>
                                                {info.likes} Likes
                                            </Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                
                <View style={{display: this.state.postPageDisplay}}>
                    <View style={styles.screenCenter}>
                        <View style={styles.infoBar}>
                            <Image
                                source={this.state.currentUserImage}
                                style={{ height:2*(deviceHeight/30), width: 2*(deviceHeight/30) }}
                            ></Image>
                            <Text style={styles.infoText}>
                                {this.state.currentUserName}
                            </Text>
                        </View>
                        <TextInput
                            style= {styles.textBox}
                            onChangeText={(newPostImage) => this.setState({newPostImage})}
                            value={this.state.newPostImage}
                        />
                        <TouchableHighlight
                        onPress={this.createPost}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Post Image
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                
                <View style={{display: this.state.accountPageDisplay}}>
                    <View style={styles.screenCenter}>
                        <ScrollView>
                            <View style={styles.infoBar}>
                                <Text style={styles.infoText}>
                                    Change Account
                                </Text>
                            </View>
                            {this.state.accounts.map((info, index) => (
                                <TouchableHighlight
                                    onPress={() => {this.changeAccount(index)}}
                                >
                                     <View style={[styles.infoBar, {backgroundColor: info.accountColor, borderWidth: info.borderWidth}]}>
                                        <Image
                                            source={info.userImage}
                                            style={{ height:2*(deviceHeight/30), width: 2*(deviceHeight/30) }}
                                        ></Image>
                                        <Text style={styles.infoText}>
                                            {info.userName}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            ))}
                            <View style={styles.infoBar}>
                            </View>
                            <View style={styles.infoBar}>
                                <Text style={styles.infoText}>
                                    Add New Account
                                </Text>
                            </View>
                            <TextInput
                                style= {styles.textBox}
                                onChangeText={(newAccountImage) => this.setState({newAccountImage})}
                                value={this.state.newAccountImage}
                            />
                            <TextInput
                                style= {styles.textBox}
                                onChangeText={(newAccountName) => this.setState({newAccountName})}
                                value={this.state.newAccountName}
                            />
                            <TouchableHighlight
                            onPress={this.createAccount}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Create Account
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </ScrollView >
                    </View>
                </View>

                <View style={styles.topAndBottomBar}>
                    <TouchableHighlight
                        onPress={this.handleWholesomeMemesPagePress}
                    >
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Wholesome Memes
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.handleNormieMemesPagePress}
                    >
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Normie Memes
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.handlePostPagePress}
                    >
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Post
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.handleDankMemesPagePress}
                    >
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Dank Memes
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.handleEdgyMemesPagePress}
                    >
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Edgy Memes
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.handleAccountPagePress}
                    >
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Account
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    topAndBottomBar: {
        height: 3*(deviceHeight/25),
        width: deviceWidth,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffb86b',
        borderTopColor: '#f20775',
        borderTopWidth: 3,
        borderBottomColor: '#f20775',
        borderBottomWidth: 3,
    },
    title: {
        fontSize: deviceHeight/20,
        color: 'white',
        fontFamily: 'Avenir',
    },
    screenCenter: {
        height: 19*(deviceHeight/25),
        width: deviceWidth,
    },
    infoBar: {
        height: 2*(deviceHeight/25),
        width: deviceWidth,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        borderColor: '#f20775',
    },
    infoText: {
        fontSize: deviceHeight/30,
        color: '#f20775',
        fontFamily: 'Avenir',
        marginLeft: 10,
    },
    heartIcon: {
        height: 2*(deviceHeight/30),
        width: 2*(deviceHeight/30),
        resizeMode: 'cover'
    },
    buttonText: {
        fontSize: deviceHeight/30,
        color: '#f20775',
        fontFamily: 'Avenir',
        textAlign: 'center',
    },
    navButton: {
        height: 2*(deviceHeight/25),
        width: 2*(deviceWidth/7),
        backgroundColor: 'white',
        justifyContent: 'center',
        borderColor: '#f20775',
        borderWidth: 2,
    },
    button: {
        height: 2*(deviceHeight/25),
        width: (deviceWidth/3),
        backgroundColor: 'white',
        justifyContent: 'center',
        borderColor: '#f20775',
        borderWidth: 2,
        marginLeft: deviceWidth/3,
        marginTop: deviceHeight/40,
    },
    middleContainer: {
        flexDirection: 'column',
    },
    mainImage: {
        height: 15*(deviceHeight/25),
        width: deviceWidth,
        resizeMode: 'cover',
        borderBottomWidth: 10,
        borderTopWidth: 10,
        borderColor: '#ffb86b',
    },
    textBox: {
        width: 2*(deviceWidth/3),
        height: deviceHeight/10,
        padding: 10,
        marginLeft: deviceWidth/6,
        backgroundColor: '#ffb86b',
        marginTop: deviceHeight/40,
        marginBottom: deviceHeight/40,
        color: 'white',
        fontSize: deviceHeight/35,
    },
});
