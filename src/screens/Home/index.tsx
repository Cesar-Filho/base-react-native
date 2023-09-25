import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {ThemeProps, useThemeContext} from '@contexts/theme';
import {useAppDispatch, useAppSelector} from '@store/hook';
import {useGetUserQuery} from '@store/modules/api';
import {formatGender} from '@utils/format';
import {AuthActions} from '@store/modules/auth';
import {ImageAvatar} from '@components/ImageAvatar';
import {Typography} from '@components/Typography';
import {LineText} from '@components/LineText';
import {Loading} from '@components/Loading';
import {Button} from '@components/Button';

export function HomeScreen() {
  const auth = useAppSelector(state => state.auth.detail);
  const {data, isLoading} = useGetUserQuery({id: auth?.id});
  const dispatch = useAppDispatch();

  const {theme} = useThemeContext();
  const styles = styling(theme);

  const logout = () => dispatch(AuthActions.logout());

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.id) {
    return (
      <View style={styles.container}>
        <Typography variation="title" style={styles.fallback}>
          Não foi possível carregar as informações do usuário.
        </Typography>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <ImageAvatar uri={data.image} />
      <LineText label="Nome" value={`${data.firstName} ${data.lastName}`} />
      <View style={styles.row}>
        <LineText label="Gênero" value={formatGender(data.gender)} />
        <LineText label="Idade" value={`${data.age} anos`} />
      </View>
      <View style={styles.row}>
        <LineText label="Altura" value={`${data.height} cm`} />
        <LineText label="Peso" value={`${data.weight} kg`} />
      </View>
      <LineText label="E-mail" value={data.email} />
      <LineText label="Telefone" value={data.phone} />

      <LineText
        label="Rua"
        value={`${data.address.address}, ${data.address.city} - ${data.address.state}`}
      />
      <LineText label="Universidade" value={data.university} />
      <LineText label="Empresa" value={data.company.name} />
      <LineText label="Departamento" value={data.company.department} />

      <Button title="Logout" style={styles.button} onPress={logout} />
    </ScrollView>
  );
}

const styling = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.spacing.MD,
    },
    fallback: {
      color: theme.colors.primary,
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    button: {
      marginTop: theme.spacing.SM,
    },
  });
