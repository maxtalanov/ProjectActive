import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'entities/Profile';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/Country';
import { CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;

}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        onChangeLastname, onChangeFirstname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { }, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, { }, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка')}
                    text={t('Пробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            {
                data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )
            }
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />

                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />

                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAge}
                />

                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                />

                <Input
                    value={data?.avatar}
                    placeholder={t('Ваш аватар')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />

                <Input
                    value={data?.username}
                    placeholder={t('Ваш username')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />

                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />

                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
