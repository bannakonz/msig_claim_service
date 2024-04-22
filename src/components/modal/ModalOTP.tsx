import { IRequestOTP, IVerifyOTP, RequestMode, RequestType } from '@/apis/msig/@types';
import { postRequestOTP, postVerifyOTP } from '@/apis/msig/msig.services';
import { LoadMoreButton } from '@/components/common/button';
import { InputOTP } from '@/components/common/input';
import BaseModal from '@/components/common/modal/Modal';
import { Title } from '@/components/content/title';
import { Icons } from '@/constants/ICONS';
import { UTM_SOURCE_CODE } from '@/constants/products';
import { encrypted, getKeyPair } from '@/utils/exchange';
import featureFlags from '@/utils/featureFlags';
import { Box, Button, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, Fragment, useEffect, useState } from 'react';

interface IModalOTP {
  isOpen: boolean;
  onClose: () => void;
  phone: string;
  reqOrderNo: string;
  onVerifySuccess: () => void;
  OTPErrorCode?: string;
}

const ModalOTP: FC<IModalOTP> = ({ isOpen, onClose, phone, reqOrderNo, onVerifySuccess }) => {
  const router = useRouter();

  const [isInitial, setIsInitial] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [otp, setOtp] = useState<string>('');
  const [request, setRequest] = useState<IRequestOTP | undefined>(undefined);
  const [verifyFail, setVerifyFail] = useState<IVerifyOTP | undefined>(undefined);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isMobile] = useMediaQuery(['(max-width: 390px)']);
  const [displayErrorMessage, setDisplayErrorMessage] = useState('');

  const phoneFormat = () => {
    if (phone) {
      let phoneFormat = phone.replace(/[^\d]/g, '');
      return phoneFormat.replace(/(\d{3})(\d{3})(\d{4})/, '$1-xxx-$3');
    }
    return '';
  };

  const zeroPad = (number: number) => {
    return `${number}`.padStart(2, '0');
  };

  const onCloseHandler = () => {
    onClose();
  };

  const onClickResentOTP = async () => {
    setDisplayErrorMessage('');
    if (phone) {
      setVerifyFail(undefined);
      const { keypairId: data1 } = await getKeyPair();
      const encryptedPhone = featureFlags.isEncrypt ? await encrypted(phone) : phone;
      const response = await postRequestOTP({
        data1,
        utmSourceCode: (router.query.utmSourceCode as string) || UTM_SOURCE_CODE,
        mobile: encryptedPhone,
        mode: RequestMode.RESEND,
        requestType: RequestType.REQUEST_ORDER,
        reqOrderNo: reqOrderNo,
      });
      if (response?.data) {
        setRequest(response?.data);
        setMinutes(response?.data.otpExpiredMinute);
      }
      if (response?.errorMessage) {
        setDisplayErrorMessage(response.errorMessage as string);
      }
    }
  };

  const onVerifyOTP = async () => {
    if (!request) {
      return;
    }
    const data = await postVerifyOTP({
      otpTrxNo: request.otpTrxNo,
      refNo: request.refNo,
      otp: otp,
    });
    if (data?.responseCode === 200) {
      onVerifySuccess();
    } else {
      setOtp('');
      setVerifyFail(data);
    }
  };

  const Countdown = () => {
    return (
      <Flex justifyContent="center" mt={6}>
        {seconds > 0 || minutes > 0 ? (
          <Text fontSize="18px">กรุณารออีก {`${zeroPad(minutes)} นาที ${zeroPad(seconds)} วิ แล้วลองอีกครั้ง...`}</Text>
        ) : (
          <></>
        )}
      </Flex>
    );
  };

  useEffect(() => {
    setDisplayErrorMessage('');
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    const initial = async () => {
      if (phone) {
        try {
          const { keypairId: data1 } = await getKeyPair();
          const encryptedPhone = featureFlags.isEncrypt ? await encrypted(phone) : phone;

          const response = await postRequestOTP({
            data1,
            utmSourceCode: (router.query.utmSourceCode as string) || UTM_SOURCE_CODE,
            mobile: encryptedPhone,
            mode: RequestMode.REQUEST,
            requestType: RequestType.REQUEST_ORDER,
            reqOrderNo: reqOrderNo,
          });
          setIsInitial(false);

          if (response?.data) {
            setRequest(response?.data);
            setMinutes(response?.data.otpExpiredMinute);
          }

          if (response.errorMessage) {
            setDisplayErrorMessage(response.errorMessage as string);
          }
        } catch (e) {
          console.error(`error: request otp`);
        }
      }
    };

    if (isOpen && isInitial) {
      initial();
    }
  }, [isOpen]);

  return (
    <BaseModal isOpen={isOpen} onClose={onCloseHandler}>
      <Box px={6} pb={6} pt="72px">
        {(verifyFail && verifyFail?.OTPErrorCode != 'E002') || displayErrorMessage ? (
          <Fragment>
            {/* <Flex justifyContent="center">
              <Image src={Icons.riInformationFill} width="7rem" />
            </Flex> */}
            <Title fontSize="29px" titleBorder={{ display: 'none' }} my="23px">
              {verifyFail?.errorMessage || displayErrorMessage || 'ไม่สำเร็จ'}
            </Title>
            <Flex justifyContent="center" mt={4}>
              <LoadMoreButton
                isDisabled={seconds > 0 || minutes > 0}
                buttonName="ส่งรหัสใหม่อีกครั้ง"
                isLoading={false}
                onClick={onClickResentOTP}
                variant="mediumParagraph"
              />
            </Flex>
          </Fragment>
        ) : (
          <Fragment>
            <Title fontSize="29px" fontWeight="medium">
              ทำการยืนยันตัวตนผ่านรหัส OTP
              <Text pt={2} fontSize="21px">
                กรอกรหัส OTP ที่ได้ถูกส่งไปข้อความ ของหมายเลข {phoneFormat()}
              </Text>
              {request?.otpExpiredMinute && (
                <Text pt={2} fontSize="18px" color="txt_copy_right">
                  (OTP มีอายุการใช้งาน {request?.otpExpiredMinute} นาที)
                </Text>
              )}
            </Title>
            <Flex justifyContent="center" mt="23px">
              {request?.refNo && (
                <Text fontSize="21px" display="flex" gap={2}>
                  รหัสอ้างอิง (Ref ID):
                  <Text fontSize="21px" fontWeight="medium">
                    {request.refNo}
                  </Text>
                </Text>
              )}
            </Flex>
            <Flex justifyContent="center" pt={4}>
              <InputOTP
                autoFocus
                value={otp}
                onChange={(value) => {
                  setOtp(value);
                  if (value.length !== 6) {
                    setIsDisabled(true);
                    // setOtp('');
                  } else {
                    setIsDisabled(false);
                  }
                }}
                // onComplete={(value) => {
                //   setOtp(value);
                // }}
                placeholder=" "
                size={isMobile ? 'md' : 'lg'}
                type="number"
              />
            </Flex>
            {verifyFail?.OTPErrorCode === 'E002' && (
              <Text my="23px" color="ci_red" textAlign="center" variant="smaller">
                {verifyFail.errorMessage}
              </Text>
            )}
            <Flex justifyContent="center" my="23px">
              <Button isDisabled={isDisabled} onClick={() => onVerifyOTP()}>
                <Text fontSize="24px" fontWeight="medium">
                  ทำการยืนยันรหัส
                </Text>
              </Button>
            </Flex>
            <Flex justifyContent="center" mt={6}>
              <LoadMoreButton
                isDisabled={seconds > 0 || minutes > 0}
                buttonName="ส่งรหัสใหม่อีกครั้ง"
                isLoading={false}
                onClick={() => onClickResentOTP()}
                variant="mediumParagraph"
              />
            </Flex>
          </Fragment>
        )}

        <Countdown />
      </Box>
    </BaseModal>
  );
};

export default ModalOTP;
