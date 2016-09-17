require 'test_helper'

class CountriesControllerTest < ActionDispatch::IntegrationTest
  def setup
    @import = imports(:one)
    @page = 1
    @page_length = 5
  end
  
  # test "the truth" do
  #   assert true
  # end

  test "should get tables" do
    get country_tables_url(
      @import.country_origin, 'Import', @import.year, @page, @page_length), as: :json
    assert_response :success
  end
end
