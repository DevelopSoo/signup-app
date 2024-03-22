import Label from "./components/Label";
import Input from "./components/Input";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [nickname, setNickname] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const fileInputRef = useRef(null);

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  // 파일 선택이 변경될 때마다 실행되는 이벤트 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 방법1 - base64 인코딩 방식
      // const reader = new FileReader();

      // reader.onloadend = () => {
      //   setImagePreviewUrl(reader.result);
      // };
      // reader.readAsDataURL(file); // 파일을 읽어서 Data URL로 변환 (Base64 인코딩 포함)
      // ------------------------------------

      // 방법2 - 메모리 활용 방법
      // 이전 URL이 있으면 해제
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
      // 새 파일에 대한 URL 생성
      const url = URL.createObjectURL(file);
      setImagePreviewUrl(url);
    }
  };

  // 컴포넌트가 언마운트되면 실행되는 useEffect
  useEffect(() => {
    // 컴포넌트가 언마운트될 때 URL 해제
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]); // previewUrl이 변경될 때마다 useEffect가 다시 실행됩니다.

  const deletePreviewImage = () => {
    if (imagePreviewUrl) {
      // 방법2에서만 필요함
      URL.revokeObjectURL(imagePreviewUrl);
      setImagePreviewUrl("");
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // 파일 입력 필드 초기화
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // 회원가입 API 요청 (+ 이미지 업로드 API 요청)
    console.log({
      email,
      password,
      passwordConfirmation,
      nickname,
      imagePreviewUrl,
    });
  };

  return (
    <div className="h-dvh bg-gray-50 dark:bg-gray-950">
      <div className="py-12 sm:py-16">
        <div className="mx-auto grid gap-8 sm:gap-12 max-w-sm sm:max-w-md 2xl:max-w-sm">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight dark:text-white">
              Create an account
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Already have an account?
              <a className="underline ml-2" href="#">
                Sign in
              </a>
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="space-y-6">
              <div className="space-y-2 flex flex-col">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  type="email"
                  required={true}
                  value={email}
                  onChange={handleEmailInput}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a className="text-sm underline" href="#">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required={true}
                  autoComplete="off"
                  value={password}
                  onChange={handlePasswordInput}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="passwordConfirmation">
                  Password confirmation
                </Label>
                <Input
                  id="passwordConfirmation"
                  type="password"
                  required={true}
                  autoComplete="off"
                  value={passwordConfirmation}
                  onChange={handlePasswordConfirmation}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nickname">Nickname</Label>
                <Input
                  id="nickname"
                  placeholder="Nickname"
                  required={true}
                  value={nickname}
                  onChange={handleNickname}
                />
              </div>
              <div className="flex items-center space-x-6">
                <div className="shrink-0">
                  <img
                    id="preview_img"
                    className="h-16 w-16 object-cover rounded-full"
                    src={`${
                      imagePreviewUrl ? imagePreviewUrl : "/default-profile.png"
                    }`}
                    alt="Current profile photo"
                  />
                </div>
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                  "
                  />
                </label>
                {imagePreviewUrl && (
                  <button
                    type="button"
                    onClick={deletePreviewImage}
                    className="bg-black dark:bg-white text-white dark:text-black inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    삭제
                  </button>
                )}
              </div>
              <div className="space-y-2">
                <button
                  className="bg-black dark:bg-white text-white dark:text-black inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
