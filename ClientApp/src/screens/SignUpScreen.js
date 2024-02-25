import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import DropdownComponent from '../components/DropdownComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SignUpScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const data = [
    {label: 'Accounting', value: 'accounting'},
    {label: 'Advertising', value: 'advertising'},
    {label: 'Aerospace', value: 'aerospace'},
    {label: 'Agriculture', value: 'agriculture'},
    {label: 'Apparel', value: 'apparel'},
    {label: 'Automotive', value: 'automotive'},
    {label: 'Banking', value: 'banking'},
    {label: 'Biotechnology', value: 'biotechnology'},
    {label: 'Chemicals', value: 'chemicals'},
    {label: 'Communications', value: 'communications'},
    {label: 'Construction', value: 'construction'},
    {label: 'Consulting', value: 'consulting'},
    {label: 'Education', value: 'education'},
    {label: 'Electronics', value: 'electronics'},
    {label: 'Energy', value: 'energy'},
    {label: 'Engineering', value: 'engineering'},
    {label: 'Entertainment', value: 'entertainment'},
    {label: 'Environmental', value: 'environmental'},
    {label: 'Finance', value: 'finance'},
    {label: 'Food & Beverage', value: 'food_beverage'},
    {label: 'Government', value: 'government'},
    {label: 'Healthcare', value: 'healthcare'},
  ];

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    company_name: '',
    mobile_no: '',
    email: '',
    password: '',
    industry_type: '',
    register_as: '',
  });

  const handelSelectedValue = value => {
    setValues({...values, industry_type: value});
    console.log(values);
  };
  const handelSelectedValue2 = value => {
    setValues({...values, register_as: value});
  };

  const handelSubmitButton = () => {
    console.log(values);
    setValues('');
  };
  const signInHandler = () => {
    navigation.navigate('SigIn');
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign-Up</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={values.first_name}
            onChangeText={text => {
              return setValues({...values, first_name: text});
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            value={values.last_name}
            onChangeText={text => {
              return setValues({...values, last_name: text});
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Company Name"
            value={values.company_name}
            onChangeText={text => {
              return setValues({...values, company_name: text});
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile Number"
            value={values.mobile_no}
            keyboardType="number-pad"
            onChangeText={text => {
              return setValues({...values, mobile_no: text});
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            value={values.email}
            onChangeText={text => {
              return setValues({...values, email: text});
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter the Password"
            accessibilityHint="#368dff"
            enterKeyHint="done"
            value={values.password}
            secureTextEntry={!passwordVisible}
            onChangeText={text => setValues({...values, password: text})}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={togglePasswordVisibility}>
            <Ionicons
              name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={21}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer1}>
          <DropdownComponent
            data={data}
            placeholder="Industry Type"
            selectedValue={handelSelectedValue}
          />
        </View>
        <View style={styles.inputContainer1}>
          <DropdownComponent
            data={data}
            placeholder="Register as"
            selectedValue={handelSelectedValue2}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handelSubmitButton}>
          <Text style={styles.buttonText}>SUMBIT</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.footerLink} onPress={signInHandler}>
              Sign-In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    marginTop: 16,
    marginRight: 12,
    right: 0,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    color: '#32CD32',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  inputContainer1: {
    width: '80%',
  },
  dropdownContainer: {
    width: '80%',
    marginTop: 12,
  },
  input: {
    fontSize: 16,
    padding: 8,
  },
  button: {
    width: '80%',
    backgroundColor: '#32CD32',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: 'gray',
  },
  footerLink: {
    fontSize: 16,
    color: '#32CD32',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
